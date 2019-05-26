interface FixStartingBuildingsAttributes {
  Building: string;
  Era: string;
  District: string;
  MinorOnly?: boolean;
  MinDifficulty: string;
}

interface FloatStartingBuildingsAttributes {
  Building?: string;
  Era?: string;
  District?: string;
  MinorOnly?: boolean;
  MinDifficulty?: string;
}

export function createStartingBuildings(attributes: FixStartingBuildingsAttributes): void;
