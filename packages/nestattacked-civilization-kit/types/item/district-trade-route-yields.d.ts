interface FixDistrictTradeRouteYieldsAttributes {
  DistrictType: string;
  YieldType: string;
  YieldChangeAsOrigin?: number;
  YieldChangeAsDomesticDestination?: number;
  YieldChangeAsInternationalDestination?: number;
}

interface FloatDistrictTradeRouteYieldsAttributes {
  DistrictType?: string;
  YieldType?: string;
  YieldChangeAsOrigin?: number;
  YieldChangeAsDomesticDestination?: number;
  YieldChangeAsInternationalDestination?: number;
}

export function createDistrictTradeRouteYields(attributes: FixDistrictTradeRouteYieldsAttributes): void;
