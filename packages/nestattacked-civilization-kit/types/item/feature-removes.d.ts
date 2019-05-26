interface FixFeatureRemovesAttributes {
  FeatureType: string;
  YieldType: string;
  Yield?: number;
}

interface FloatFeatureRemovesAttributes {
  FeatureType?: string;
  YieldType?: string;
  Yield?: number;
}

export function createFeatureRemoves(attributes: FixFeatureRemovesAttributes): void;
