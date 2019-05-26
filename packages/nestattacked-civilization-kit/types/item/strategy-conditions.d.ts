interface FixStrategyConditionsAttributes {
  StrategyType: string;
  ConditionFunction: string;
  StringValue?: string;
  ThresholdValue?: number;
  Forbidden?: boolean;
  Disqualifier?: boolean;
  Exclusive: boolean;
}

interface FloatStrategyConditionsAttributes {
  StrategyType?: string;
  ConditionFunction?: string;
  StringValue?: string;
  ThresholdValue?: number;
  Forbidden?: boolean;
  Disqualifier?: boolean;
  Exclusive?: boolean;
}

export function createStrategyConditions(attributes: FixStrategyConditionsAttributes): void;
