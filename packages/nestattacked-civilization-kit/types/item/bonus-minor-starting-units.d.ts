interface FixBonusMinorStartingUnitsAttributes {
  Unit: string;
  Era: string;
  Quantity?: number;
  OnDistrictCreated?: boolean;
  District?: string;
  MinDifficulty: string;
  DifficultyDelta?: number;
}

interface FloatBonusMinorStartingUnitsAttributes {
  Unit?: string;
  Era?: string;
  Quantity?: number;
  OnDistrictCreated?: boolean;
  District?: string;
  MinDifficulty?: string;
  DifficultyDelta?: number;
}

export function createBonusMinorStartingUnits(attributes: FixBonusMinorStartingUnitsAttributes): void;
