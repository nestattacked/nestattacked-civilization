interface FixKindsAttributes {
  Kind: string;
  Hash?: number;
}

interface FloatKindsAttributes {
  Kind?: string;
  Hash?: number;
}

export function createKinds(attributes: FixKindsAttributes): void;
