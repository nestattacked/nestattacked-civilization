interface FixWarsAttributes {
  WarType: string;
  Name?: string;
  Description?: string;
}

interface FloatWarsAttributes {
  WarType?: string;
  Name?: string;
  Description?: string;
}

export function createWars(attributes: FixWarsAttributes): void;
