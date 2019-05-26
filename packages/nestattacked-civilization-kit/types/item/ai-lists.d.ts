interface FixAiListsAttributes {
  ListType: string;
  LeaderType: string;
  AgendaType: string;
  System: string;
  MinDifficulty?: string;
  MaxDifficulty?: string;
}

interface FloatAiListsAttributes {
  ListType?: string;
  LeaderType?: string;
  AgendaType?: string;
  System?: string;
  MinDifficulty?: string;
  MaxDifficulty?: string;
}

export function createAiLists(attributes: FixAiListsAttributes): void;
