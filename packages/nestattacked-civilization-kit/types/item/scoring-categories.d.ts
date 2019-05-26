interface FixScoringCategoriesAttributes {
  CategoryType: string;
  Name: string;
  Multiplier?: number;
}

interface FloatScoringCategoriesAttributes {
  CategoryType?: string;
  Name?: string;
  Multiplier?: number;
}

export function createScoringCategories(attributes: FixScoringCategoriesAttributes): void;
