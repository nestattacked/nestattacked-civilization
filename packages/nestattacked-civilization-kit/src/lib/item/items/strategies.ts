import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  StrategyType: string;
  VictoryType?: string;
  NumConditionsNeeded?: number;
}

interface FloatAttributes {
  StrategyType?: string;
  VictoryType?: string;
  NumConditionsNeeded?: number;
}

const Strategies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Strategies'
);

export { Strategies };
