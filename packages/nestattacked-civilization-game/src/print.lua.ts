import { print } from 'nestattacked-civilization-kit';

interface Main {
  (): void;
}

const main: Main = () => {
  print('hello civilization 6!');
};

main();
