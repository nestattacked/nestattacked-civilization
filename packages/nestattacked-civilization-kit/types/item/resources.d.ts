interface FixResourcesAttributes {
  ResourceType: string;
  Name: string;
  ResourceClassType: string;
  Happiness?: number;
  NoRiver?: boolean;
  RequiresRiver?: boolean;
  Frequency?: number;
  Clumped?: boolean;
  PrereqTech?: string;
  PrereqCivic?: string;
  PeakEra?: string;
  RevealedEra?: number;
  LakeEligible?: boolean;
  AdjacentToLand?: boolean;
  SeaFrequency?: number;
}

interface FloatResourcesAttributes {
  ResourceType?: string;
  Name?: string;
  ResourceClassType?: string;
  Happiness?: number;
  NoRiver?: boolean;
  RequiresRiver?: boolean;
  Frequency?: number;
  Clumped?: boolean;
  PrereqTech?: string;
  PrereqCivic?: string;
  PeakEra?: string;
  RevealedEra?: number;
  LakeEligible?: boolean;
  AdjacentToLand?: boolean;
  SeaFrequency?: number;
}

export function createResources(attributes: FixResourcesAttributes): void;
