interface FixDifficultiesAttributes {
  DifficultyType: string;
  Name: string;
}

interface FloatDifficultiesAttributes {
  DifficultyType?: string;
  Name?: string;
}

export function createDifficulties(attributes: FixDifficultiesAttributes): void;
