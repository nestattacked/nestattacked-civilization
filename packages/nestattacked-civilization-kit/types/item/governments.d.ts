interface FixGovernmentsAttributes {
  GovernmentType: string;
  Name: string;
  PrereqCivic?: string;
  InherentBonusDesc: string;
  AccumulatedBonusShortDesc: string;
  AccumulatedBonusDesc: string;
  OtherGovernmentIntolerance?: number;
  InfluencePointsPerTurn: number;
  InfluencePointsThreshold: number;
  InfluenceTokensPerThreshold: number;
  BonusType: string;
  PolicyToUnlock?: string;
  Tier?: string;
}

interface FloatGovernmentsAttributes {
  GovernmentType?: string;
  Name?: string;
  PrereqCivic?: string;
  InherentBonusDesc?: string;
  AccumulatedBonusShortDesc?: string;
  AccumulatedBonusDesc?: string;
  OtherGovernmentIntolerance?: number;
  InfluencePointsPerTurn?: number;
  InfluencePointsThreshold?: number;
  InfluenceTokensPerThreshold?: number;
  BonusType?: string;
  PolicyToUnlock?: string;
  Tier?: string;
}

export function createGovernments(attributes: FixGovernmentsAttributes): void;
