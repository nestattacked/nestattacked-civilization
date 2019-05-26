interface FixResourceSeaLuxuriesAttributes {
  MapArgument: number;
  Duel?: number;
  Tiny?: number;
  Small?: number;
  Standard?: number;
  Large?: number;
  Huge?: number;
}

interface FloatResourceSeaLuxuriesAttributes {
  MapArgument?: number;
  Duel?: number;
  Tiny?: number;
  Small?: number;
  Standard?: number;
  Large?: number;
  Huge?: number;
}

export function createResourceSeaLuxuries(attributes: FixResourceSeaLuxuriesAttributes): void;
