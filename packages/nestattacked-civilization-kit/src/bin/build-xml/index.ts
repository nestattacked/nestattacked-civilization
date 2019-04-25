import { buildItems } from './build-items';
import { sourceFiles } from '../util/source-file';

type BuildXml = () => Promise<void>;
type Task = Promise<void>;

const buildXml: BuildXml = async () => {
  const tasks: Task[] = sourceFiles
    .filter(sourceFile => sourceFile.extension === 'xml')
    .map(sourceFile =>
      buildItems(sourceFile.sourceFileName, sourceFile.distFileName)
    );
  await Promise.all(tasks);
};

export { buildXml };
