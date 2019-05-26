interface FixGossipsAttributes {
  GossipType: string;
  VisibilityLevel?: number;
  Description?: string;
  Message: string;
  Filter?: boolean;
  ErasUntilObsolete?: number;
  LevelRequired?: number;
}

interface FloatGossipsAttributes {
  GossipType?: string;
  VisibilityLevel?: number;
  Description?: string;
  Message?: string;
  Filter?: boolean;
  ErasUntilObsolete?: number;
  LevelRequired?: number;
}

export function createGossips(attributes: FixGossipsAttributes): void;
