import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ID: number;
  CivilizationType?: string;
  LeaderType?: string;
  ContinentType?: string;
  CityName: string;
  SortIndex?: number;
}

interface FloatAttributes {
  ID?: number;
  CivilizationType?: string;
  LeaderType?: string;
  ContinentType?: string;
  CityName?: string;
  SortIndex?: number;
}

const CityNames: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CityNames'
);

export { CityNames };
