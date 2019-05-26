interface FixContinentsAttributes {
  ContinentType: string;
  Description?: string;
}

interface FloatContinentsAttributes {
  ContinentType?: string;
  Description?: string;
}

export function createContinents(attributes: FixContinentsAttributes): void;
