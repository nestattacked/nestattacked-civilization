import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatPersonIndividualType: string;
  ModifierId: string;
}

interface FloatAttributes {
  GreatPersonIndividualType?: string;
  ModifierId?: string;
}

const GreatPersonIndividualBirthModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatPersonIndividualBirthModifiers'
);

export { GreatPersonIndividualBirthModifiers };
