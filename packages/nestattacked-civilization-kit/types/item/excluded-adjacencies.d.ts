interface FixExcludedAdjacenciesAttributes {
  TraitType: string;
  YieldChangeId: string;
}

interface FloatExcludedAdjacenciesAttributes {
  TraitType?: string;
  YieldChangeId?: string;
}

export function createExcludedAdjacencies(attributes: FixExcludedAdjacenciesAttributes): void;
