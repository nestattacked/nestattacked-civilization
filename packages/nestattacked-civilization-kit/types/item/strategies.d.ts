interface FixStrategiesAttributes {
  StrategyType: string;
  VictoryType?: string;
  NumConditionsNeeded?: number;
}

interface FloatStrategiesAttributes {
  StrategyType?: string;
  VictoryType?: string;
  NumConditionsNeeded?: number;
}

export function createStrategies(attributes: FixStrategiesAttributes): void;
