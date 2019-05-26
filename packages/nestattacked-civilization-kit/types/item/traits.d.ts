interface FixTraitsAttributes {
  TraitType: string;
  Name?: string;
  Description?: string;
  InternalOnly?: boolean;
}

interface FloatTraitsAttributes {
  TraitType?: string;
  Name?: string;
  Description?: string;
  InternalOnly?: boolean;
}

export function createTraits(attributes: FixTraitsAttributes): void;
