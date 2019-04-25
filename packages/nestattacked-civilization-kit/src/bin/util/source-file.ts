interface SourceFile {
  stage: 'InGameActions' | 'FrontEndActions';
  extension: 'xml' | 'lua';
  subType: 'UpdateDatabase' | 'ImportFiles' | 'UpdateColors' | 'UpdateText';
  mainType: 'GameInfo' | 'GameData';
  sourceFileName: string;
  distFileName: string;
  sourceExist?: boolean;
  distExist?: boolean;
}

const sourceFiles: SourceFile[] = [
  {
    stage: 'InGameActions',
    extension: 'xml',
    mainType: 'GameInfo',
    subType: 'UpdateDatabase',
    sourceFileName: 'update-database',
    distFileName: 'Update_Database'
  },
  {
    stage: 'InGameActions',
    extension: 'lua',
    mainType: 'GameInfo',
    subType: 'ImportFiles',
    sourceFileName: 'import-files',
    distFileName: 'Import_Files'
  },
  {
    stage: 'InGameActions',
    extension: 'xml',
    mainType: 'GameInfo',
    subType: 'UpdateColors',
    sourceFileName: 'update-colors',
    distFileName: 'Update_Colors'
  },
  {
    stage: 'InGameActions',
    extension: 'xml',
    mainType: 'GameData',
    subType: 'UpdateText',
    sourceFileName: 'update-text',
    distFileName: 'Update_Text'
  }
];

export { SourceFile, sourceFiles };
