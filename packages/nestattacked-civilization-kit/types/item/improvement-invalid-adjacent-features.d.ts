interface FixImprovementInvalidAdjacentFeaturesAttributes {
  ImprovementType: string;
  FeatureType: string;
}

interface FloatImprovementInvalidAdjacentFeaturesAttributes {
  ImprovementType?: string;
  FeatureType?: string;
}

export function createImprovementInvalidAdjacentFeatures(attributes: FixImprovementInvalidAdjacentFeaturesAttributes): void;
