import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const Civics: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Civics'
);

export { Civics };
