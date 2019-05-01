import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationType: string;
  Header: string;
  Caption: string;
  SortIndex?: number;
}

interface FloatAttributes {
  CivilizationType?: string;
  Header?: string;
  Caption?: string;
  SortIndex?: number;
}

const CivilizationInfo: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilizationInfo'
);

export { CivilizationInfo };
