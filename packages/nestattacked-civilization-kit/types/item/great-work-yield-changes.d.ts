interface FixGreatWorkYieldChangesAttributes {
  GreatWorkType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatGreatWorkYieldChangesAttributes {
  GreatWorkType?: string;
  YieldType?: string;
  YieldChange?: number;
}

export function createGreatWorkYieldChanges(attributes: FixGreatWorkYieldChangesAttributes): void;
