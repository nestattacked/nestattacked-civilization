interface FixGovernmentTiersAttributes {
  TierType: string;
  Sorting: number;
}

interface FloatGovernmentTiersAttributes {
  TierType?: string;
  Sorting?: number;
}

export function createGovernmentTiers(attributes: FixGovernmentTiersAttributes): void;
