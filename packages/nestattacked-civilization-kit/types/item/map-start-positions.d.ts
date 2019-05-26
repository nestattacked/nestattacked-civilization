interface FixMapStartPositionsAttributes {
  MapStartPositionType: string;
  Name: string;
  Description: string;
  Scale?: number;
}

interface FloatMapStartPositionsAttributes {
  MapStartPositionType?: string;
  Name?: string;
  Description?: string;
  Scale?: number;
}

export function createMapStartPositions(attributes: FixMapStartPositionsAttributes): void;
