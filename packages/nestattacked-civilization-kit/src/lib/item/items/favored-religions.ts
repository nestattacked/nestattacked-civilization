import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  LeaderType: string;
  CivilizationType: string;
  ReligionType: string;
}

interface FloatAttributes {
  LeaderType?: string;
  CivilizationType?: string;
  ReligionType?: string;
}

const FavoredReligions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'FavoredReligions'
);

export { FavoredReligions };
