interface FixAiOperationTeamsAttributes {
  TeamName: string;
  OperationName: string;
  MinUnits?: number;
  MaxUnits?: number;
  InitialStrengthAdvantage?: number;
  OngoingStrengthAdvantage?: number;
  SafeRallyPoint?: boolean;
  Condition?: string;
}

interface FloatAiOperationTeamsAttributes {
  TeamName?: string;
  OperationName?: string;
  MinUnits?: number;
  MaxUnits?: number;
  InitialStrengthAdvantage?: number;
  OngoingStrengthAdvantage?: number;
  SafeRallyPoint?: boolean;
  Condition?: string;
}

export function createAiOperationTeams(attributes: FixAiOperationTeamsAttributes): void;
