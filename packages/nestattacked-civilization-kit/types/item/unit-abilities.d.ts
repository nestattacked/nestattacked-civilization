interface FixUnitAbilitiesAttributes {
  UnitAbilityType: string;
  Name?: string;
  Description?: string;
  Inactive?: boolean;
  ShowFloatTextWhenEarned?: boolean;
}

interface FloatUnitAbilitiesAttributes {
  UnitAbilityType?: string;
  Name?: string;
  Description?: string;
  Inactive?: boolean;
  ShowFloatTextWhenEarned?: boolean;
}

export function createUnitAbilities(attributes: FixUnitAbilitiesAttributes): void;
