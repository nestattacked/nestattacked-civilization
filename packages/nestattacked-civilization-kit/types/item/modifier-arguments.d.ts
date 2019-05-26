interface FixModifierArgumentsAttributes {
  ModifierId: string;
  Name: string;
  Type?: string;
  Value: string;
  Extra?: string;
  SecondExtra?: string;
}

interface FloatModifierArgumentsAttributes {
  ModifierId?: string;
  Name?: string;
  Type?: string;
  Value?: string;
  Extra?: string;
  SecondExtra?: string;
}

export function createModifierArguments(attributes: FixModifierArgumentsAttributes): void;
