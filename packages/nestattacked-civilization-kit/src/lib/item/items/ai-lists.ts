import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ListType: string;
  LeaderType: string;
  AgendaType: string;
  System: string;
  MinDifficulty?: string;
  MaxDifficulty?: string;
}

interface FloatAttributes {
  ListType?: string;
  LeaderType?: string;
  AgendaType?: string;
  System?: string;
  MinDifficulty?: string;
  MaxDifficulty?: string;
}

const AiLists: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiLists'
);

export { AiLists };
