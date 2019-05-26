interface FixResourceTradeRouteYieldsAttributes {
  ResourceType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatResourceTradeRouteYieldsAttributes {
  ResourceType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createResourceTradeRouteYields(attributes: FixResourceTradeRouteYieldsAttributes): void;
