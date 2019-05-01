import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const Technologies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Technologies'
);

export { Technologies };
