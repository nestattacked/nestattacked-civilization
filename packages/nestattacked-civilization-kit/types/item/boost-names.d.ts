interface FixBoostNamesAttributes {
  BoostType: string;
  BoostValue: number;
}

interface FloatBoostNamesAttributes {
  BoostType?: string;
  BoostValue?: number;
}

export function createBoostNames(attributes: FixBoostNamesAttributes): void;
