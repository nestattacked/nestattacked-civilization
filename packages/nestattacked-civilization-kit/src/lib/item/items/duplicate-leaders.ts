import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  LeaderType: string;
  OtherLeaderType: string;
}

interface FloatAttributes {
  LeaderType?: string;
  OtherLeaderType?: string;
}

const DuplicateLeaders: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DuplicateLeaders'
);

export { DuplicateLeaders };
