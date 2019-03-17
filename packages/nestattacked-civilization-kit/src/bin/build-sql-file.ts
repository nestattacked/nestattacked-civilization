import Config from './config';
import { outputFile } from 'fs-extra';
import path from 'path';
import execa from 'execa';
import { getSqlSourceFiles } from './get-files';

interface BuildSqlFile {
  (): Promise<void>;
}

type Task = Promise<void>;

interface ExecuteFile {
  (file: string): Task;
}

const executeFile: ExecuteFile = async file => {
  const distPath: string = file
    .replace(new RegExp(`^${Config.rootDir}`), Config.outDir)
    .replace(/sql\.ts$/, 'sql');
  const tsnodeExe: string = path.resolve(
    __dirname,
    '../../node_modules/.bin/ts-node'
  );
  const stdout: string = (await execa(tsnodeExe, [file])).stdout;
  await outputFile(distPath, stdout);
};

const buildSqlFile: BuildSqlFile = async () => {
  const files: string[] = await getSqlSourceFiles();
  const tasks: Task[] = files.map(executeFile);
  await Promise.all(tasks);
};

export { buildSqlFile };
