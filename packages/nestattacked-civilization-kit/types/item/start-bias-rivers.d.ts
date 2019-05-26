interface FixStartBiasRiversAttributes {
  CivilizationType: string;
  Tier?: number;
}

interface FloatStartBiasRiversAttributes {
  CivilizationType?: string;
  Tier?: number;
}

export function createStartBiasRivers(attributes: FixStartBiasRiversAttributes): void;
