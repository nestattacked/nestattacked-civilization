interface FixUnitAiTypesAttributes {
  AiType: string;
  TypeValue?: number;
  Priority?: boolean;
}

interface FloatUnitAiTypesAttributes {
  AiType?: string;
  TypeValue?: number;
  Priority?: boolean;
}

export function createUnitAiTypes(attributes: FixUnitAiTypesAttributes): void;
