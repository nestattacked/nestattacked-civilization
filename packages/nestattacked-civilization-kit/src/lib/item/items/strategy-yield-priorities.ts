import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  StrategyType: string;
  YieldType: string;
  PseudoYieldType: string;
  PercentageDelta?: number;
}

interface FloatAttributes {
  StrategyType?: string;
  YieldType?: string;
  PseudoYieldType?: string;
  PercentageDelta?: number;
}

const StrategyYieldPriorities: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Strategy_YieldPriorities'
);

export { StrategyYieldPriorities };
