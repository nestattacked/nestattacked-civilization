import { outputFile } from 'fs-extra';
import XML from 'xml';
import { config, getLuaDistFiles, getSqlDistFiles } from './util';

interface Json {
  [key: string]: any;
}

type ModInfo = Json;
type GenerateModInfo = () => Promise<void>;

const generateModInfo: GenerateModInfo = async () => {
  const luaFiles: string[] = await getLuaDistFiles();
  const sqlFiles: string[] = await getSqlDistFiles();
  const luaFileObjects: Json[] = luaFiles.map(file => ({ File: file }));
  const sqlFileObjects: Json[] = sqlFiles.map(file => ({ File: file }));
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
  const modInfoPath: string = `${config.outDir}/${config.outDir}.modinfo`;
  await outputFile(modInfoPath, modInfoXml);
};

export { generateModInfo };
