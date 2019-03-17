import { outputFile } from 'fs-extra';
import XML from 'xml';
import Config from './config';
import { getLuaDistFiles, getSqlDistFiles } from './get-files';

interface GenerateModInfo {
  (): Promise<void>;
}

interface Json {
  [key: string]: any;
}

type ModInfo = Json;

const generateModInfo: GenerateModInfo = async () => {
  const luaFiles: string[] = await getLuaDistFiles();
  const sqlFiles: string[] = await getSqlDistFiles();
  const luaFileObjects: Json[] = luaFiles.map(file => ({ File: file }));
  const sqlFileObjects: Json[] = sqlFiles.map(file => ({ File: file }));
  const modInfo: ModInfo = {
    Mod: [
      { _attr: { id: Config.modId } },
      {
        Properties: [
          { Name: Config.name },
          { Description: Config.description },
          { Teaser: Config.teaser }
        ]
      },
      {
        InGameActions: [
          { UpdateDatabase: sqlFileObjects },
          { ImportFiles: luaFileObjects }
        ]
      },
      { Files: [...luaFileObjects, ...sqlFileObjects] }
    ]
  };
  const modInfoXml: string = XML(modInfo, {
    declaration: true,
    indent: '  '
  });
  const modInfoPath: string = `${Config.outDir}/${Config.outDir}.modinfo`;
  await outputFile(modInfoPath, modInfoXml);
};

export { generateModInfo };
