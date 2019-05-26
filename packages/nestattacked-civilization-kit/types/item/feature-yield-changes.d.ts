interface FixFeatureYieldChangesAttributes {
  FeatureType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatFeatureYieldChangesAttributes {
  FeatureType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createFeatureYieldChanges(attributes: FixFeatureYieldChangesAttributes): void;
