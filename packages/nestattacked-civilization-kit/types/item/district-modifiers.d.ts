interface FixDistrictModifiersAttributes {
  DistrictType: string;
  ModifierId: string;
}

interface FloatDistrictModifiersAttributes {
  DistrictType?: string;
  ModifierId?: string;
}

export function createDistrictModifiers(attributes: FixDistrictModifiersAttributes): void;
