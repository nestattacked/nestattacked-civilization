interface FixFeatureAdjacentFeaturesAttributes {
  FeatureType: string;
  FeatureTypeAdjacent: string;
}

interface FloatFeatureAdjacentFeaturesAttributes {
  FeatureType?: string;
  FeatureTypeAdjacent?: string;
}

export function createFeatureAdjacentFeatures(attributes: FixFeatureAdjacentFeaturesAttributes): void;
