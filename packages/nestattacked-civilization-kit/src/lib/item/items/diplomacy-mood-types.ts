import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
}

interface FloatAttributes {
  Type?: string;
}

const DiplomacyMoodTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomacyMoodTypes'
);

export { DiplomacyMoodTypes };
