interface FixTypesAttributes {
  Type: string;
  Hash?: number;
  Kind: string;
}

interface FloatTypesAttributes {
  Type?: string;
  Hash?: number;
  Kind?: string;
}

export function createTypes(attributes: FixTypesAttributes): void;
