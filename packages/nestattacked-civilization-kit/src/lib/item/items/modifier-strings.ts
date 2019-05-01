import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ModifierId: string;
  Context: string;
  Text: string;
}

interface FloatAttributes {
  ModifierId?: string;
  Context?: string;
  Text?: string;
}

const ModifierStrings: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ModifierStrings'
);

export { ModifierStrings };
