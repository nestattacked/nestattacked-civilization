interface FixDistrictRequiredFeaturesAttributes {
  DistrictType: string;
  FeatureType: string;
}

interface FloatDistrictRequiredFeaturesAttributes {
  DistrictType?: string;
  FeatureType?: string;
}

export function createDistrictRequiredFeatures(attributes: FixDistrictRequiredFeaturesAttributes): void;
