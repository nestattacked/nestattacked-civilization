import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  LeaderType: string;
  Header: string;
  Caption: string;
  SortIndex?: number;
}

interface FloatAttributes {
  LeaderType?: string;
  Header?: string;
  Caption?: string;
  SortIndex?: number;
}

const LeaderInfo: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'LeaderInfo'
);

export { LeaderInfo };
