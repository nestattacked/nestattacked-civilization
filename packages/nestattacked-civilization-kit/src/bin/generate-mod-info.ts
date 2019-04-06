import { outputFile } from 'fs-extra';
import XML from 'xml';
import { config } from './util';

interface Json {
  [key: string]: any;
}

type ModInfo = Json;
type GenerateModInfo = () => Promise<void>;

const generateModInfo: GenerateModInfo = async () => {
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
          {
            UpdateDatabase: [{ File: 'Update_Database.xml' }]
          }
        ]
      },
      { Files: [{ File: 'Update_Database.xml' }] }
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
