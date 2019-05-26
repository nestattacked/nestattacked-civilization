interface FixPseudoYieldsAttributes {
  PseudoYieldType: string;
  DefaultValue?: number;
}

interface FloatPseudoYieldsAttributes {
  PseudoYieldType?: string;
  DefaultValue?: number;
}

export function createPseudoYields(attributes: FixPseudoYieldsAttributes): void;
