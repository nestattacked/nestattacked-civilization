interface FixScoringLineItemsAttributes {
  LineItemType: string;
  Name: string;
  Category: string;
  Multiplier?: number;
  ScaleByCost?: boolean;
  Civics?: boolean;
  Cities?: boolean;
  Districts?: boolean;
  Population?: boolean;
  GreatPeople?: boolean;
  Techs?: boolean;
  Wonders?: boolean;
  Religion?: boolean;
  Pillage?: boolean;
  Trade?: boolean;
  GoldPerTurn?: boolean;
  TieBreakerPriority: number;
  ScoringScenario1?: boolean;
  ScoringScenario2?: boolean;
  ScoringScenario3?: boolean;
  EraScore?: boolean;
  Converted?: boolean;
  Buildings?: boolean;
}

interface FloatScoringLineItemsAttributes {
  LineItemType?: string;
  Name?: string;
  Category?: string;
  Multiplier?: number;
  ScaleByCost?: boolean;
  Civics?: boolean;
  Cities?: boolean;
  Districts?: boolean;
  Population?: boolean;
  GreatPeople?: boolean;
  Techs?: boolean;
  Wonders?: boolean;
  Religion?: boolean;
  Pillage?: boolean;
  Trade?: boolean;
  GoldPerTurn?: boolean;
  TieBreakerPriority?: number;
  ScoringScenario1?: boolean;
  ScoringScenario2?: boolean;
  ScoringScenario3?: boolean;
  EraScore?: boolean;
  Converted?: boolean;
  Buildings?: boolean;
}

export function createScoringLineItems(attributes: FixScoringLineItemsAttributes): void;
