import { config, getSqlSourceFiles } from '../util';
import { outputFile } from 'fs-extra';
import path from 'path';
import execa from 'execa';

type BuildXml = () => Promise<void>;
type Task = Promise<void>;
type ExecuteFile = (file: string) => Task;

const executeFile: ExecuteFile = async file => {
  const distPath: string = file
    .replace(new RegExp(`^${config.rootDir}`), config.outDir)
    .replace(/sql\.ts$/, 'sql');
  const tsnodeExe: string = path.resolve(
    __dirname,
    '../../../node_modules/.bin/ts-node'
  );
  const stdout: string = (await execa(tsnodeExe, [file])).stdout;
  await outputFile(distPath, stdout);
};

const buildXml: BuildXml = async () => {
  const files: string[] = await getSqlSourceFiles();
  const tasks: Task[] = files.map(executeFile);
  await Promise.all(tasks);
};

export { buildXml };
