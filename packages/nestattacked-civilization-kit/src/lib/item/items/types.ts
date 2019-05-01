import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  Hash?: number;
  Kind: string;
}

interface FloatAttributes {
  Type?: string;
  Hash?: number;
  Kind?: string;
}

const Types: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Types'
);

export { Types };
