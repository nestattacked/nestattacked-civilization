import { outputFile, pathExists } from 'fs-extra';
import { sourceFiles, SourceFile } from './util/source-file';
import XML from 'xml';
import { config } from './util';
import { groupBy, map, Dictionary } from 'lodash';

interface Json {
  [key: string]: any;
}

type ModInfo = Json;
type GenerateModInfo = () => Promise<void>;
type AddInfoTask = Promise<SourceFile>;
type AddDistExistInfo = (sourceFile: SourceFile) => AddInfoTask;
type GetValidSourceFiles = () => Promise<SourceFile[]>;
type BuildActions = (validSourceFiles: SourceFile[]) => Json[];
type BuildStage = (stageSourceFiles: SourceFile[], stage: string) => Json;
type BuildSubType = (subTypeSourceFiles: SourceFile[], subType: string) => Json;

const generateModInfo: GenerateModInfo = async () => {
  const validSourceFiles: SourceFile[] = await getValidSourceFiles();
  const Actions: Json[] = buildActions(validSourceFiles);
  const files: Json[] = validSourceFiles.map(sourceFile => ({
    File: `${sourceFile.distFileName}.${sourceFile.extension}`
  }));
  const modInfo: ModInfo = {
    Mod: [
      { _attr: { id: config.modId } },
      {
        Properties: [
          { Name: config.name },
          { Description: config.description },
          { Teaser: config.teaser }
        ]
      },
      ...Actions,
      { Files: files }
    ]
  };
  const modInfoXml: string = XML(modInfo, {
    declaration: true,
    indent: '  '
  });
  const modInfoPath: string = `${config.outDir}/${config.outDir}.modinfo`;
  await outputFile(modInfoPath, modInfoXml);
};

const getValidSourceFiles: GetValidSourceFiles = async () => {
  const tasks: AddInfoTask[] = sourceFiles.map(sourceFile =>
    addDistExistInfo(sourceFile)
  );
  return (await Promise.all(tasks)).filter(sourceFile => sourceFile.distExist);
};

const addDistExistInfo: AddDistExistInfo = async sourceFile => {
  const exist: boolean = await pathExists(
    `${config.outDir}/${sourceFile.distFileName}.${sourceFile.extension}`
  );
  const newSourceFile: SourceFile = { ...sourceFile };
  newSourceFile.distExist = exist;
  return newSourceFile;
};

const buildActions: BuildActions = validSourceFiles => {
  const stageSourceFiles: Dictionary<SourceFile[]> = groupBy(
    validSourceFiles,
    'stage'
  );
  return map(stageSourceFiles, buildStage);
};

const buildStage: BuildStage = (stageSourceFiles, stage) => {
  const subTypeSourceFiles: Dictionary<SourceFile[]> = groupBy(
    stageSourceFiles,
    'subType'
  );
  return {
    [stage]: map(subTypeSourceFiles, buildSubType)
  };
};

const buildSubType: BuildSubType = (subTypeSourceFiles, subType) => ({
  [subType]: subTypeSourceFiles.map(sourceFile => ({
    File: `${sourceFile.distFileName}.${sourceFile.extension}`
  }))
});

export { generateModInfo };
