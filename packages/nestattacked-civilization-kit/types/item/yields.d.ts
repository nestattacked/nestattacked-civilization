interface FixYieldsAttributes {
  YieldType: string;
  Name: string;
  IconString: string;
  OccupiedCityChange?: number;
  DefaultValue?: number;
}

interface FloatYieldsAttributes {
  YieldType?: string;
  Name?: string;
  IconString?: string;
  OccupiedCityChange?: number;
  DefaultValue?: number;
}

export function createYields(attributes: FixYieldsAttributes): void;
