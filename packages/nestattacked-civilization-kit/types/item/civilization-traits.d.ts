interface FixCivilizationTraitsAttributes {
  CivilizationType: string;
  TraitType: string;
}

interface FloatCivilizationTraitsAttributes {
  CivilizationType?: string;
  TraitType?: string;
}

export function createCivilizationTraits(attributes: FixCivilizationTraitsAttributes): void;
