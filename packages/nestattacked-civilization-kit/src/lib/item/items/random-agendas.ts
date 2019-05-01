import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  AgendaType: string;
  GameLimit?: number;
}

interface FloatAttributes {
  AgendaType?: string;
  GameLimit?: number;
}

const RandomAgendas: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'RandomAgendas'
);

export { RandomAgendas };
