interface FixTargetTypesAttributes {
  TargetType: string;
}

interface FloatTargetTypesAttributes {
  TargetType?: string;
}

export function createTargetTypes(attributes: FixTargetTypesAttributes): void;
