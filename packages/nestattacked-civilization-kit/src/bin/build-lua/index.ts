import { sourceFiles } from '../util/source-file';
import { compileFile } from './compile-file';

type BuildLua = () => Promise<void>;
type Task = Promise<void>;

const buildLua: BuildLua = async () => {
  const tasks: Task[] = sourceFiles
    .filter(sourceFile => sourceFile.type === 'lua')
    .map(sourceFile =>
      compileFile(sourceFile.sourceFileName, sourceFile.distFileName)
    );
  await Promise.all(tasks);
};

export { buildLua };
