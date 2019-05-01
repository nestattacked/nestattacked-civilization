import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  AgendaOne: string;
  AgendaTwo: string;
}

interface FloatAttributes {
  AgendaOne?: string;
  AgendaTwo?: string;
}

const ExclusiveAgendas: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ExclusiveAgendas'
);

export { ExclusiveAgendas };
