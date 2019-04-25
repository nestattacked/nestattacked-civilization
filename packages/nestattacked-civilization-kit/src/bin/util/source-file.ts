interface SourceFile {
  stage: 'InGameActions' | 'FrontEndActions';
  type: 'xml' | 'lua';
  subType?: 'UpdateDatabase' | 'ImportFiles';
  sourceFileName: string;
  distFileName: string;
  sourceExist?: boolean;
  distExist?: boolean;
}

const sourceFiles: SourceFile[] = [
  {
    stage: 'InGameActions',
    type: 'xml',
    subType: 'UpdateDatabase',
    sourceFileName: 'update-database',
    distFileName: 'Update_Database'
  },
  {
    stage: 'InGameActions',
    type: 'lua',
    subType: 'ImportFiles',
    sourceFileName: 'import-files',
    distFileName: 'Import_Files'
  }
];

export { SourceFile, sourceFiles };
