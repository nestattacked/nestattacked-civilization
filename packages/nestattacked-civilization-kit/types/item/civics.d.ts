interface FixCivicsAttributes {
  CivicType: string;
  Name: string;
  Cost: number;
  Repeatable?: boolean;
  Description?: string;
  EraType: string;
  BarbarianFree?: boolean;
  UITreeRow?: number;
  AdvisorType?: string;
  EmbarkAll?: boolean;
  EmbarkUnitType?: string;
}

interface FloatCivicsAttributes {
  CivicType?: string;
  Name?: string;
  Cost?: number;
  Repeatable?: boolean;
  Description?: string;
  EraType?: string;
  BarbarianFree?: boolean;
  UITreeRow?: number;
  AdvisorType?: string;
  EmbarkAll?: boolean;
  EmbarkUnitType?: string;
}

export function createCivics(attributes: FixCivicsAttributes): void;
