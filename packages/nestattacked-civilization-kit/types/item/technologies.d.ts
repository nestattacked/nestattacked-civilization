interface FixTechnologiesAttributes {
  TechnologyType: string;
  Name: string;
  Cost: number;
  Repeatable?: boolean;
  EmbarkUnitType?: string;
  EmbarkAll?: boolean;
  Description?: string;
  EraType: string;
  Critical?: boolean;
  BarbarianFree?: boolean;
  UITreeRow?: number;
  AdvisorType?: string;
}

interface FloatTechnologiesAttributes {
  TechnologyType?: string;
  Name?: string;
  Cost?: number;
  Repeatable?: boolean;
  EmbarkUnitType?: string;
  EmbarkAll?: boolean;
  Description?: string;
  EraType?: string;
  Critical?: boolean;
  BarbarianFree?: boolean;
  UITreeRow?: number;
  AdvisorType?: string;
}

export function createTechnologies(attributes: FixTechnologiesAttributes): void;
