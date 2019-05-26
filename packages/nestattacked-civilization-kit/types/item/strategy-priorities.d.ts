interface FixStrategyPrioritiesAttributes {
  StrategyType: string;
  ListType: string;
}

interface FloatStrategyPrioritiesAttributes {
  StrategyType?: string;
  ListType?: string;
}

export function createStrategyPriorities(attributes: FixStrategyPrioritiesAttributes): void;
