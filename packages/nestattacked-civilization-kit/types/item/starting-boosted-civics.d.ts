interface FixStartingBoostedCivicsAttributes {
  Civic: string;
  Era: string;
}

interface FloatStartingBoostedCivicsAttributes {
  Civic?: string;
  Era?: string;
}

export function createStartingBoostedCivics(attributes: FixStartingBoostedCivicsAttributes): void;
