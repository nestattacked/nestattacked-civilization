interface FixUnitPromotionPrereqsAttributes {
  UnitPromotion: string;
  PrereqUnitPromotion: string;
}

interface FloatUnitPromotionPrereqsAttributes {
  UnitPromotion?: string;
  PrereqUnitPromotion?: string;
}

export function createUnitPromotionPrereqs(attributes: FixUnitPromotionPrereqsAttributes): void;
