import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationType: string;
  Name: string;
  Description?: string;
  Adjective: string;
  RandomCityNameDepth?: number;
  StartingCivilizationLevelType: string;
  Ethnicity?: string;
}

interface FloatAttributes {
  CivilizationType?: string;
  Name?: string;
  Description?: string;
  Adjective?: string;
  RandomCityNameDepth?: number;
  StartingCivilizationLevelType?: string;
  Ethnicity?: string;
}

const Civilizations: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Civilizations'
);

export { Civilizations };
