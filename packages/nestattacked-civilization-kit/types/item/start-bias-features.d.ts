interface FixStartBiasFeaturesAttributes {
  CivilizationType: string;
  FeatureType: string;
  Tier?: number;
}

interface FloatStartBiasFeaturesAttributes {
  CivilizationType?: string;
  FeatureType?: string;
  Tier?: number;
}

export function createStartBiasFeatures(attributes: FixStartBiasFeaturesAttributes): void;
