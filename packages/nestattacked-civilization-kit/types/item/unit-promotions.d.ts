interface FixUnitPromotionsAttributes {
  UnitPromotionType: string;
  Name: string;
  Description: string;
  Level: number;
  Specialization?: string;
  PromotionClass?: string;
  Column?: number;
}

interface FloatUnitPromotionsAttributes {
  UnitPromotionType?: string;
  Name?: string;
  Description?: string;
  Level?: number;
  Specialization?: string;
  PromotionClass?: string;
  Column?: number;
}

export function createUnitPromotions(attributes: FixUnitPromotionsAttributes): void;
