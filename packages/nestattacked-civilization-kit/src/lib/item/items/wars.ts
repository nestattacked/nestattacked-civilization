import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  WarType: string;
  Name?: string;
  Description?: string;
}

interface FloatAttributes {
  WarType?: string;
  Name?: string;
  Description?: string;
}

const Wars: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Wars'
);

export { Wars };
