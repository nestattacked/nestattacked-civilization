interface FixImprovementBonusYieldChangesAttributes {
  Id: number;
  ImprovementType: string;
  YieldType: string;
  BonusYieldChange: number;
  PrereqTech?: string;
  PrereqCivic?: string;
}

interface FloatImprovementBonusYieldChangesAttributes {
  Id?: number;
  ImprovementType?: string;
  YieldType?: string;
  BonusYieldChange?: number;
  PrereqTech?: string;
  PrereqCivic?: string;
}

export function createImprovementBonusYieldChanges(attributes: FixImprovementBonusYieldChangesAttributes): void;
