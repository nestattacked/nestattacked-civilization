import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  StrategyType: string;
  ListType: string;
}

interface FloatAttributes {
  StrategyType?: string;
  ListType?: string;
}

const StrategyPriorities: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Strategy_Priorities'
);

export { StrategyPriorities };
