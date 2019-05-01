import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ModifierId: string;
}

interface FloatAttributes {
  ModifierId?: string;
}

const GameModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GameModifiers'
);

export { GameModifiers };
