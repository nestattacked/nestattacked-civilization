interface FixExcludedGreatPersonClassesAttributes {
  GreatPersonClassType: string;
  TraitType: string;
}

interface FloatExcludedGreatPersonClassesAttributes {
  GreatPersonClassType?: string;
  TraitType?: string;
}

export function createExcludedGreatPersonClasses(attributes: FixExcludedGreatPersonClassesAttributes): void;
