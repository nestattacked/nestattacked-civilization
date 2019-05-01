import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  AgendaType: string;
  LeaderType: string;
  PercentageChance?: number;
}

interface FloatAttributes {
  AgendaType?: string;
  LeaderType?: string;
  PercentageChance?: number;
}

const AgendaPreferredLeaders: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AgendaPreferredLeaders'
);

export { AgendaPreferredLeaders };
