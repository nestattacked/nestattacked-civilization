interface FixImprovementValidAdjacentResourcesAttributes {
  ImprovementType: string;
  ResourceType: string;
}

interface FloatImprovementValidAdjacentResourcesAttributes {
  ImprovementType?: string;
  ResourceType?: string;
}

export function createImprovementValidAdjacentResources(attributes: FixImprovementValidAdjacentResourcesAttributes): void;
