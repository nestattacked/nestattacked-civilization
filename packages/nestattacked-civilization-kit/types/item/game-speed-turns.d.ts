interface FixGameSpeedTurnsAttributes {
  GameSpeedType: string;
  MonthIncrement: number;
  TurnsPerIncrement: number;
}

interface FloatGameSpeedTurnsAttributes {
  GameSpeedType?: string;
  MonthIncrement?: number;
  TurnsPerIncrement?: number;
}

export function createGameSpeedTurns(attributes: FixGameSpeedTurnsAttributes): void;
