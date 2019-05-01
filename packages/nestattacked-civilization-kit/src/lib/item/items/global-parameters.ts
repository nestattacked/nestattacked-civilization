import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Name: string;
  Value: string;
}

interface FloatAttributes {
  Name?: string;
  Value?: string;
}

const GlobalParameters: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GlobalParameters'
);

export { GlobalParameters };
