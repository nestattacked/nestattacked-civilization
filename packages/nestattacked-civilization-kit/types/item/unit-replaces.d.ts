interface FixUnitReplacesAttributes {
  CivUniqueUnitType: string;
  ReplacesUnitType: string;
}

interface FloatUnitReplacesAttributes {
  CivUniqueUnitType?: string;
  ReplacesUnitType?: string;
}

export function createUnitReplaces(attributes: FixUnitReplacesAttributes): void;
