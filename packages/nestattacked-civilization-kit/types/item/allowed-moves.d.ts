interface FixAllowedMovesAttributes {
  AllowedMoveType: string;
  Value: number;
  IsHomeland?: boolean;
  IsTactical?: boolean;
}

interface FloatAllowedMovesAttributes {
  AllowedMoveType?: string;
  Value?: number;
  IsHomeland?: boolean;
  IsTactical?: boolean;
}

export function createAllowedMoves(attributes: FixAllowedMovesAttributes): void;
