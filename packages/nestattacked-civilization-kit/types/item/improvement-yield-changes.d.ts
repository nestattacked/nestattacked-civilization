interface FixImprovementYieldChangesAttributes {
  ImprovementType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatImprovementYieldChangesAttributes {
  ImprovementType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createImprovementYieldChanges(attributes: FixImprovementYieldChangesAttributes): void;
