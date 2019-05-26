interface FixBuildingValidFeaturesAttributes {
  BuildingType: string;
  FeatureType: string;
}

interface FloatBuildingValidFeaturesAttributes {
  BuildingType?: string;
  FeatureType?: string;
}

export function createBuildingValidFeatures(attributes: FixBuildingValidFeaturesAttributes): void;
