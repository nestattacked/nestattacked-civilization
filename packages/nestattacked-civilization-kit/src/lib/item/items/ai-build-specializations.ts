import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SpecializationType: string;
  BuildingYield?: string;
  IncludePopulation?: boolean;
  IncludeDefense?: boolean;
  IncludeMilitaryUnits?: boolean;
  IncludeTradeUnits?: boolean;
  PrioritizationYield: string;
  PriorityOffset?: number;
}

interface FloatAttributes {
  SpecializationType?: string;
  BuildingYield?: string;
  IncludePopulation?: boolean;
  IncludeDefense?: boolean;
  IncludeMilitaryUnits?: boolean;
  IncludeTradeUnits?: boolean;
  PrioritizationYield?: string;
  PriorityOffset?: number;
}

const AiBuildSpecializations: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiBuildSpecializations'
);

export { AiBuildSpecializations };
