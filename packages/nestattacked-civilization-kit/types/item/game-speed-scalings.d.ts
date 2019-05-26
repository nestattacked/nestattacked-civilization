interface FixGameSpeedScalingsAttributes {
  GameSpeedScalingType: string;
  GameSpeedType: string;
  ScalingType: string;
  DefaultCostMultiplier?: number;
}

interface FloatGameSpeedScalingsAttributes {
  GameSpeedScalingType?: string;
  GameSpeedType?: string;
  ScalingType?: string;
  DefaultCostMultiplier?: number;
}

export function createGameSpeedScalings(attributes: FixGameSpeedScalingsAttributes): void;
