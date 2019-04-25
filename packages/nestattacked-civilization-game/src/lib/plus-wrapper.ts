import { plus } from './plus';

type PlusWrapper = (a: number) => number;

const plusWrapper: PlusWrapper = a => {
  return plus(a, 1);
};

export { plusWrapper };
