import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ID: number;
  GameCapability?: number;
  DependsOnCapability?: string;
}

interface FloatAttributes {
  ID?: number;
  GameCapability?: number;
  DependsOnCapability?: string;
}

const GameCapabilityDependencies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GameCapabilityDependencies'
);

export { GameCapabilityDependencies };
