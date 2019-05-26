interface FixAiScoutUsesAttributes {
  ScoutUseType: string;
}

interface FloatAiScoutUsesAttributes {
  ScoutUseType?: string;
}

export function createAiScoutUses(attributes: FixAiScoutUsesAttributes): void;
