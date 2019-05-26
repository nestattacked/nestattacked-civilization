interface FixUnitPromotionClassesAttributes {
  PromotionClassType: string;
  Name: string;
}

interface FloatUnitPromotionClassesAttributes {
  PromotionClassType?: string;
  Name?: string;
}

export function createUnitPromotionClasses(attributes: FixUnitPromotionClassesAttributes): void;
