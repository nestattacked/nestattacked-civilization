interface FixAiOperationLimitsAttributes {
  ListType: string;
  OperationType: string;
  BaseValue?: number;
  DeltaValue?: number;
}

interface FloatAiOperationLimitsAttributes {
  ListType?: string;
  OperationType?: string;
  BaseValue?: number;
  DeltaValue?: number;
}

export function createAiOperationLimits(attributes: FixAiOperationLimitsAttributes): void;
