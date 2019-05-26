interface FixImprovementValidFeaturesAttributes {
  ImprovementType: string;
  FeatureType: string;
}

interface FloatImprovementValidFeaturesAttributes {
  ImprovementType?: string;
  FeatureType?: string;
}

export function createImprovementValidFeatures(attributes: FixImprovementValidFeaturesAttributes): void;
