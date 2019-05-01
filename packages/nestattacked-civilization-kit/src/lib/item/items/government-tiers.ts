import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TierType: string;
  Sorting: number;
}

interface FloatAttributes {
  TierType?: string;
  Sorting?: number;
}

const GovernmentTiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GovernmentTiers'
);

export { GovernmentTiers };
