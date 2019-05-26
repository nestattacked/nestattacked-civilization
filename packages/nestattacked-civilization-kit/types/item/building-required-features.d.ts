interface FixBuildingRequiredFeaturesAttributes {
  BuildingType: string;
  FeatureType: string;
}

interface FloatBuildingRequiredFeaturesAttributes {
  BuildingType?: string;
  FeatureType?: string;
}

export function createBuildingRequiredFeatures(attributes: FixBuildingRequiredFeaturesAttributes): void;
