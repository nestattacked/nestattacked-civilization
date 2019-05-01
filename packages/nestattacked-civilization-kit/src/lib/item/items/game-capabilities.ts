import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GameCapability: string;
}

interface FloatAttributes {
  GameCapability?: string;
}

const GameCapabilities: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GameCapabilities'
);

export { GameCapabilities };
