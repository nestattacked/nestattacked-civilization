interface FixStartingCivicsAttributes {
  Civic: string;
  Era: string;
}

interface FloatStartingCivicsAttributes {
  Civic?: string;
  Era?: string;
}

export function createStartingCivics(attributes: FixStartingCivicsAttributes): void;
