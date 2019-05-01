import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GovernmentBonusType: string;
}

interface FloatAttributes {
  GovernmentBonusType?: string;
}

const GovernmentBonusNames: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GovernmentBonusNames'
);

export { GovernmentBonusNames };
