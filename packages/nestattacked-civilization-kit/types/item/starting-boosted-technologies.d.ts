interface FixStartingBoostedTechnologiesAttributes {
  Technology: string;
  Era: string;
}

interface FloatStartingBoostedTechnologiesAttributes {
  Technology?: string;
  Era?: string;
}

export function createStartingBoostedTechnologies(attributes: FixStartingBoostedTechnologiesAttributes): void;
