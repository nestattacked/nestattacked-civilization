interface FixFeatureAdjacentYieldsAttributes {
  FeatureType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatFeatureAdjacentYieldsAttributes {
  FeatureType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createFeatureAdjacentYields(attributes: FixFeatureAdjacentYieldsAttributes): void;
