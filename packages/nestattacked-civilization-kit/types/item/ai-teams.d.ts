interface FixAiTeamsAttributes {
  TeamName: string;
}

interface FloatAiTeamsAttributes {
  TeamName?: string;
}

export function createAiTeams(attributes: FixAiTeamsAttributes): void;
