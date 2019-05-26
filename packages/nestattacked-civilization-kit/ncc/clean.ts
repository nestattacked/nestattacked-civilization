import { emptyDir } from 'fs-extra';
import { config } from './config';

type Clean = () => Promise<void>;

const clean: Clean = async () => {
  await emptyDir(config.outDir);
};

export { clean };
