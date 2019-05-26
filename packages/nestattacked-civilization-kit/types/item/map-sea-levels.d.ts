interface FixMapSeaLevelsAttributes {
  MapSeaLevelType: string;
  Name: string;
  Description: string;
  Scale?: number;
}

interface FloatMapSeaLevelsAttributes {
  MapSeaLevelType?: string;
  Name?: string;
  Description?: string;
  Scale?: number;
}

export function createMapSeaLevels(attributes: FixMapSeaLevelsAttributes): void;
