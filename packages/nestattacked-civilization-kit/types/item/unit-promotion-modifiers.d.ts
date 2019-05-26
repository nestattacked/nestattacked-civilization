interface FixUnitPromotionModifiersAttributes {
  UnitPromotionType: number;
  ModifierId: string;
}

interface FloatUnitPromotionModifiersAttributes {
  UnitPromotionType?: number;
  ModifierId?: string;
}

export function createUnitPromotionModifiers(attributes: FixUnitPromotionModifiersAttributes): void;
