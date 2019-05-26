interface FixGreatPersonClassesAttributes {
  GreatPersonClassType: string;
  Name: string;
  UnitType: string;
  DistrictType: string;
  MaxPlayerInstances?: number;
  PseudoYieldType?: string;
  IconString: string;
  ActionIcon: string;
}

interface FloatGreatPersonClassesAttributes {
  GreatPersonClassType?: string;
  Name?: string;
  UnitType?: string;
  DistrictType?: string;
  MaxPlayerInstances?: number;
  PseudoYieldType?: string;
  IconString?: string;
  ActionIcon?: string;
}

export function createGreatPersonClasses(attributes: FixGreatPersonClassesAttributes): void;
