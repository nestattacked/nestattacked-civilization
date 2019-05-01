import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SavingType: string;
}

interface FloatAttributes {
  SavingType?: string;
}

const SavingTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'SavingTypes'
);

export { SavingTypes };
