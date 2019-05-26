interface FixGlobalParametersAttributes {
  Name: string;
  Value: string;
}

interface FloatGlobalParametersAttributes {
  Name?: string;
  Value?: string;
}

export function createGlobalParameters(attributes: FixGlobalParametersAttributes): void;
