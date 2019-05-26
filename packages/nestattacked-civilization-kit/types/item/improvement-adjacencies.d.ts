interface FixImprovementAdjacenciesAttributes {
  ImprovementType: string;
  YieldChangeId: string;
}

interface FloatImprovementAdjacenciesAttributes {
  ImprovementType?: string;
  YieldChangeId?: string;
}

export function createImprovementAdjacencies(attributes: FixImprovementAdjacenciesAttributes): void;
