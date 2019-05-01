import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  AgendaType: string;
  TraitType: string;
}

interface FloatAttributes {
  AgendaType?: string;
  TraitType?: string;
}

const AgendaTraits: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AgendaTraits'
);

export { AgendaTraits };
