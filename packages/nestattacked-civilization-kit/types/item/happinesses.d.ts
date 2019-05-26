interface FixHappinessesAttributes {
  HappinessType: string;
  Name: string;
  MinimumAmenityScore?: number;
  MaximumAmenityScore?: number;
  GrowthModifier?: number;
  NonFoodYieldModifier?: number;
  RebellionPoints?: number;
}

interface FloatHappinessesAttributes {
  HappinessType?: string;
  Name?: string;
  MinimumAmenityScore?: number;
  MaximumAmenityScore?: number;
  GrowthModifier?: number;
  NonFoodYieldModifier?: number;
  RebellionPoints?: number;
}

export function createHappinesses(attributes: FixHappinessesAttributes): void;
