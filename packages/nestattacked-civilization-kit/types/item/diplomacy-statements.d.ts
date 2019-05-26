interface FixDiplomacyStatementsAttributes {
  Type: string;
  SubType: string;
  Initiator: string;
  Leader: string;
  Mood: string;
  StatementText?: string;
  ReasonText?: string;
  LeaderAnimation?: string;
  SceneEffect?: string;
  Selections?: string;
}

interface FloatDiplomacyStatementsAttributes {
  Type?: string;
  SubType?: string;
  Initiator?: string;
  Leader?: string;
  Mood?: string;
  StatementText?: string;
  ReasonText?: string;
  LeaderAnimation?: string;
  SceneEffect?: string;
  Selections?: string;
}

export function createDiplomacyStatements(attributes: FixDiplomacyStatementsAttributes): void;
