interface FixUnitAbilityModifiersAttributes {
  UnitAbilityType: string;
  ModifierId: string;
}

interface FloatUnitAbilityModifiersAttributes {
  UnitAbilityType?: string;
  ModifierId?: string;
}

export function createUnitAbilityModifiers(attributes: FixUnitAbilityModifiersAttributes): void;
