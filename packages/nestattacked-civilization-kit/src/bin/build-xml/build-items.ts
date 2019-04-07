import path from 'path';
import execa from 'execa';
import { config } from '../util/config';
import { outputFile, pathExists } from 'fs-extra';

type BuildItems = (srcFile: string, distFile: string) => Promise<void>;

const buildItems: BuildItems = async (srcFile, distFile) => {
  const file: string = `${config.rootDir}/${srcFile}.ts`;
  const fileExist: boolean = await pathExists(file);
  if (fileExist) {
    const tsnodeExe: string = path.resolve(
      __dirname,
      '../../../node_modules/.bin/ts-node'
    );
    const stdout: string = (await execa(tsnodeExe, [file])).stdout;
    await outputFile(`${config.outDir}/${distFile}.xml`, stdout);
  }
};

export { buildItems };
