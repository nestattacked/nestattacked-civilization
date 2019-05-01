import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const ScoringLineItems: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ScoringLineItems'
);

export { ScoringLineItems };
