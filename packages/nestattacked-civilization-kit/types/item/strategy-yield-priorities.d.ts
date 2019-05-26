interface FixStrategyYieldPrioritiesAttributes {
  StrategyType: string;
  YieldType: string;
  PseudoYieldType: string;
  PercentageDelta?: number;
}

interface FloatStrategyYieldPrioritiesAttributes {
  StrategyType?: string;
  YieldType?: string;
  PseudoYieldType?: string;
  PercentageDelta?: number;
}

export function createStrategyYieldPriorities(attributes: FixStrategyYieldPrioritiesAttributes): void;
