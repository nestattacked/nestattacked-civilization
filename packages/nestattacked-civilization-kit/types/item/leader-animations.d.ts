interface FixLeaderAnimationsAttributes {
  Leader: string;
  Name: string;
  Sequence: string;
  Initial?: string;
}

interface FloatLeaderAnimationsAttributes {
  Leader?: string;
  Name?: string;
  Sequence?: string;
  Initial?: string;
}

export function createLeaderAnimations(attributes: FixLeaderAnimationsAttributes): void;
