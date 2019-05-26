interface FixSavingTypesAttributes {
  SavingType: string;
}

interface FloatSavingTypesAttributes {
  SavingType?: string;
}

export function createSavingTypes(attributes: FixSavingTypesAttributes): void;
