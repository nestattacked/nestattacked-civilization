interface SourceFile {
  stage: 'InGameActions' | 'FrontEndActions';
  type: 'xml';
  subType?: 'UpdateDatabase';
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
  }
];

export { SourceFile, sourceFiles };
