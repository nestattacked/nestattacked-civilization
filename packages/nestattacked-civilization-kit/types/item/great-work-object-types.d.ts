interface FixGreatWorkObjectTypesAttributes {
  GreatWorkObjectType: string;
  Value: number;
  PseudoYieldType: string;
  Name: string;
  IconString: string;
}

interface FloatGreatWorkObjectTypesAttributes {
  GreatWorkObjectType?: string;
  Value?: number;
  PseudoYieldType?: string;
  Name?: string;
  IconString?: string;
}

export function createGreatWorkObjectTypes(attributes: FixGreatWorkObjectTypesAttributes): void;
