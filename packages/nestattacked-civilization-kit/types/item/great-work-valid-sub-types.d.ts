interface FixGreatWorkValidSubTypesAttributes {
  GreatWorkSlotType: string;
  GreatWorkObjectType: string;
}

interface FloatGreatWorkValidSubTypesAttributes {
  GreatWorkSlotType?: string;
  GreatWorkObjectType?: string;
}

export function createGreatWorkValidSubTypes(attributes: FixGreatWorkValidSubTypesAttributes): void;
