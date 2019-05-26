interface FixAllowedOperationsAttributes {
  ListType: string;
  OperationDef: string;
  RemoveRef?: boolean;
}

interface FloatAllowedOperationsAttributes {
  ListType?: string;
  OperationDef?: string;
  RemoveRef?: boolean;
}

export function createAllowedOperations(attributes: FixAllowedOperationsAttributes): void;
