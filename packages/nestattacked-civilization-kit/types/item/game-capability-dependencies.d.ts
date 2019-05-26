interface FixGameCapabilityDependenciesAttributes {
  ID: number;
  GameCapability?: number;
  DependsOnCapability?: string;
}

interface FloatGameCapabilityDependenciesAttributes {
  ID?: number;
  GameCapability?: number;
  DependsOnCapability?: string;
}

export function createGameCapabilityDependencies(attributes: FixGameCapabilityDependenciesAttributes): void;
