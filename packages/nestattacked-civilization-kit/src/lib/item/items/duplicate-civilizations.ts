import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationType: string;
  OtherCivilizationType: string;
}

interface FloatAttributes {
  CivilizationType?: string;
  OtherCivilizationType?: string;
}

const DuplicateCivilizations: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DuplicateCivilizations'
);

export { DuplicateCivilizations };
