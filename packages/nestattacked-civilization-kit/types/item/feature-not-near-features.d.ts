interface FixFeatureNotNearFeaturesAttributes {
  FeatureType: string;
  FeatureTypeAvoid: string;
}

interface FloatFeatureNotNearFeaturesAttributes {
  FeatureType?: string;
  FeatureTypeAvoid?: string;
}

export function createFeatureNotNearFeatures(attributes: FixFeatureNotNearFeaturesAttributes): void;
