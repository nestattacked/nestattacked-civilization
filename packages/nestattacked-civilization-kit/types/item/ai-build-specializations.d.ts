interface FixAiBuildSpecializationsAttributes {
  SpecializationType: string;
  BuildingYield?: string;
  IncludePopulation?: boolean;
  IncludeDefense?: boolean;
  IncludeMilitaryUnits?: boolean;
  IncludeTradeUnits?: boolean;
  PrioritizationYield: string;
  PriorityOffset?: number;
}

interface FloatAiBuildSpecializationsAttributes {
  SpecializationType?: string;
  BuildingYield?: string;
  IncludePopulation?: boolean;
  IncludeDefense?: boolean;
  IncludeMilitaryUnits?: boolean;
  IncludeTradeUnits?: boolean;
  PrioritizationYield?: string;
  PriorityOffset?: number;
}

export function createAiBuildSpecializations(attributes: FixAiBuildSpecializationsAttributes): void;
