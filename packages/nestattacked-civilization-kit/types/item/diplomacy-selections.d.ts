interface FixDiplomacySelectionsAttributes {
  Type: string;
  Leader: string;
  Mood: string;
  Sort?: number;
  Key: string;
  Text: string;
  Tooltip?: string;
  DiplomaticActionType?: string;
}

interface FloatDiplomacySelectionsAttributes {
  Type?: string;
  Leader?: string;
  Mood?: string;
  Sort?: number;
  Key?: string;
  Text?: string;
  Tooltip?: string;
  DiplomaticActionType?: string;
}

export function createDiplomacySelections(attributes: FixDiplomacySelectionsAttributes): void;
