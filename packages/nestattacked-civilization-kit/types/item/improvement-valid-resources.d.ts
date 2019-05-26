interface FixImprovementValidResourcesAttributes {
  ImprovementType: string;
  ResourceType: string;
  MustRemoveFeature?: boolean;
}

interface FloatImprovementValidResourcesAttributes {
  ImprovementType?: string;
  ResourceType?: string;
  MustRemoveFeature?: boolean;
}

export function createImprovementValidResources(attributes: FixImprovementValidResourcesAttributes): void;
