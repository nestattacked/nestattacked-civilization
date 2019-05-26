interface FixAiOperationTypesAttributes {
  OperationType: string;
  Value: number;
}

interface FloatAiOperationTypesAttributes {
  OperationType?: string;
  Value?: number;
}

export function createAiOperationTypes(attributes: FixAiOperationTypesAttributes): void;
