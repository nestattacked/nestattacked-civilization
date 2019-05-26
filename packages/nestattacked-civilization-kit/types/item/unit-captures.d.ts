interface FixUnitCapturesAttributes {
  CapturedUnitType: string;
  BecomesUnitType: string;
}

interface FloatUnitCapturesAttributes {
  CapturedUnitType?: string;
  BecomesUnitType?: string;
}

export function createUnitCaptures(attributes: FixUnitCapturesAttributes): void;
