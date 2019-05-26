interface FixUnitFormationClassesAttributes {
  FormationClassType: string;
  Name: string;
}

interface FloatUnitFormationClassesAttributes {
  FormationClassType?: string;
  Name?: string;
}

export function createUnitFormationClasses(attributes: FixUnitFormationClassesAttributes): void;
