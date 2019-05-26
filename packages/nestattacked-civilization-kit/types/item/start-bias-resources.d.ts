interface FixStartBiasResourcesAttributes {
  CivilizationType: string;
  ResourceType: string;
  Tier?: number;
}

interface FloatStartBiasResourcesAttributes {
  CivilizationType?: string;
  ResourceType?: string;
  Tier?: number;
}

export function createStartBiasResources(attributes: FixStartBiasResourcesAttributes): void;
