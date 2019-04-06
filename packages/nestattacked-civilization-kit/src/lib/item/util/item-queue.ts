import { Item } from '../type';
import { processQueue } from './process-queue';

const itemQueue: Item[] = [];

process.on('exit', () => {
  processQueue(itemQueue);
});

export { itemQueue };
