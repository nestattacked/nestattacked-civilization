import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  LeaderType: string;
  AgendaType: string;
}

interface FloatAttributes {
  LeaderType?: string;
  AgendaType?: string;
}

const HistoricalAgendas: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'HistoricalAgendas'
);

export { HistoricalAgendas };
