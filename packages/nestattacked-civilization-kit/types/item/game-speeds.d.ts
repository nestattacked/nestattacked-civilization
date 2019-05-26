interface FixGameSpeedsAttributes {
  GameSpeedType: string;
  Name?: string;
  Description?: string;
  CostMultiplier?: number;
  CivicUnlockMaxCost: number;
  CivicUnlockPerTurnDrop: number;
  CivicUnlockMinCost: number;
}

interface FloatGameSpeedsAttributes {
  GameSpeedType?: string;
  Name?: string;
  Description?: string;
  CostMultiplier?: number;
  CivicUnlockMaxCost?: number;
  CivicUnlockPerTurnDrop?: number;
  CivicUnlockMinCost?: number;
}

export function createGameSpeeds(attributes: FixGameSpeedsAttributes): void;
