import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  Kind: string;
}

interface FloatAttributes {
  Type?: string;
  Kind?: string;
}

const Type: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Types'
);

export { Type };
