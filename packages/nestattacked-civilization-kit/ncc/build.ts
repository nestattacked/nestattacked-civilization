//todo: build code, it's just test code for now
import ts from 'typescript';

const build = async (code: string) => {
  const sourceFile = ts.createSourceFile('', code, ts.ScriptTarget.ES2015);
  travel(sourceFile);
};

const travel = (node: ts.Node) => {
  switch (node.kind) {
    case ts.SyntaxKind.SourceFile:
      console.log('root');
      break;
    case ts.SyntaxKind.ImportDeclaration:
      console.log('import declaration');
      break;
    default:
      console.log('unkown node');
      break;
  }
  ts.forEachChild(node, travel);
};

export { build };
