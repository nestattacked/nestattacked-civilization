import { emptyDir } from 'fs-extra';
import Config from './config';

interface Clean {
  (): Promise<void>;
}

const clean: Clean = async () => {
  await emptyDir(Config.outDir);
};

export { clean };
