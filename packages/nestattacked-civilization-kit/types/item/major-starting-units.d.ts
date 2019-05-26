interface FixMajorStartingUnitsAttributes {
  Unit: string;
  Era: string;
  District: string;
  Quantity?: number;
  NotStartTile?: boolean;
  OnDistrictCreated?: boolean;
  AiOnly?: boolean;
  MinDifficulty: string;
  DifficultyDelta?: number;
}

interface FloatMajorStartingUnitsAttributes {
  Unit?: string;
  Era?: string;
  District?: string;
  Quantity?: number;
  NotStartTile?: boolean;
  OnDistrictCreated?: boolean;
  AiOnly?: boolean;
  MinDifficulty?: string;
  DifficultyDelta?: number;
}

export function createMajorStartingUnits(attributes: FixMajorStartingUnitsAttributes): void;
