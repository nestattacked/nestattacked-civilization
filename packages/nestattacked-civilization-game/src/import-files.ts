import { print } from 'nestattacked-civilization-kit';
import { plusWrapper } from './lib/plus-wrapper';
import { plus } from './lib/plus';

print('hello civilization 6!');
print(`${plus(1, 2)}`);
print(`${plusWrapper(1)}`);
