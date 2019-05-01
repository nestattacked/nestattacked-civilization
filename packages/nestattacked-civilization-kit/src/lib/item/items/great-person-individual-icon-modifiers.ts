import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatPersonIndividualType: string;
  OverrideUnitIcon: string;
}

interface FloatAttributes {
  GreatPersonIndividualType?: string;
  OverrideUnitIcon?: string;
}

const GreatPersonIndividualIconModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatPersonIndividualIconModifiers'
);

export { GreatPersonIndividualIconModifiers };
