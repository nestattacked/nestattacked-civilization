import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  StrategyType: string;
  ConditionFunction: string;
  StringValue?: string;
  ThresholdValue?: number;
  Forbidden?: boolean;
  Disqualifier?: boolean;
  Exclusive: boolean;
}

interface FloatAttributes {
  StrategyType?: string;
  ConditionFunction?: string;
  StringValue?: string;
  ThresholdValue?: number;
  Forbidden?: boolean;
  Disqualifier?: boolean;
  Exclusive?: boolean;
}

const StrategyConditions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StrategyConditions'
);

export { StrategyConditions };
