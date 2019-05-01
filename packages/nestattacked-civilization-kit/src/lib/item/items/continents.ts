import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ContinentType: string;
  Description?: string;
}

interface FloatAttributes {
  ContinentType?: string;
  Description?: string;
}

const Continents: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Continents'
);

export { Continents };
