interface FixResourceValidFeaturesAttributes {
  ResourceType: string;
  FeatureType: string;
}

interface FloatResourceValidFeaturesAttributes {
  ResourceType?: string;
  FeatureType?: string;
}

export function createResourceValidFeatures(attributes: FixResourceValidFeaturesAttributes): void;
