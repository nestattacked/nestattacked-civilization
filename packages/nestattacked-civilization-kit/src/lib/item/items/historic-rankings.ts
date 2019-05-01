import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  HistoricLeader: string;
  Quote?: string;
  Score?: number;
}

interface FloatAttributes {
  HistoricLeader?: string;
  Quote?: string;
  Score?: number;
}

const HistoricRankings: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'HistoricRankings'
);

export { HistoricRankings };
