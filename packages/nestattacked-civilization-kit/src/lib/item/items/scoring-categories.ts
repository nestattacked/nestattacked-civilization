import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CategoryType: string;
  Name: string;
  Multiplier?: number;
}

interface FloatAttributes {
  CategoryType?: string;
  Name?: string;
  Multiplier?: number;
}

const ScoringCategories: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ScoringCategories'
);

export { ScoringCategories };
