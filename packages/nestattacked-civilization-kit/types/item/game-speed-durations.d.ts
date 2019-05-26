interface FixGameSpeedDurationsAttributes {
  GameSpeedScalingType: string;
  NumberOfTurnsOnStandard: number;
  NumberOfTurnsScaled: number;
}

interface FloatGameSpeedDurationsAttributes {
  GameSpeedScalingType?: string;
  NumberOfTurnsOnStandard?: number;
  NumberOfTurnsScaled?: number;
}

export function createGameSpeedDurations(attributes: FixGameSpeedDurationsAttributes): void;
