interface FixResourceDistributionAttributes {
  Continents: number;
  Scarce: number;
  Average: number;
  Plentiful: number;
  PercentAdjusted: number;
}

interface FloatResourceDistributionAttributes {
  Continents?: number;
  Scarce?: number;
  Average?: number;
  Plentiful?: number;
  PercentAdjusted?: number;
}

export function createResourceDistribution(attributes: FixResourceDistributionAttributes): void;
