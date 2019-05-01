import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  LeaderType: string;
  CivilizationType: string;
  CapitalName: string;
}

interface FloatAttributes {
  LeaderType?: string;
  CivilizationType?: string;
  CapitalName?: string;
}

const CivilizationLeaders: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilizationLeaders'
);

export { CivilizationLeaders };
