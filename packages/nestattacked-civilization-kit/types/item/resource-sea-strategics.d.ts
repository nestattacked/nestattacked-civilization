interface FixResourceSeaStrategicsAttributes {
  MapArgument: number;
  Duel?: number;
  Tiny?: number;
  Small?: number;
  Standard?: number;
  Large?: number;
  Huge?: number;
}

interface FloatResourceSeaStrategicsAttributes {
  MapArgument?: number;
  Duel?: number;
  Tiny?: number;
  Small?: number;
  Standard?: number;
  Large?: number;
  Huge?: number;
}

export function createResourceSeaStrategics(attributes: FixResourceSeaStrategicsAttributes): void;
