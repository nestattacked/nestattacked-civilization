interface FixVictoriesAttributes {
  VictoryType: string;
  Name: string;
  Blurb: string;
  RequirementSetId: string;
  EnabledByDefault?: boolean;
  Description?: string;
  Icon?: string;
  OneMoreTurn?: boolean;
  CriticalPercentage?: number;
  RequiresMultipleTeams?: boolean;
}

interface FloatVictoriesAttributes {
  VictoryType?: string;
  Name?: string;
  Blurb?: string;
  RequirementSetId?: string;
  EnabledByDefault?: boolean;
  Description?: string;
  Icon?: string;
  OneMoreTurn?: boolean;
  CriticalPercentage?: number;
  RequiresMultipleTeams?: boolean;
}

export function createVictories(attributes: FixVictoriesAttributes): void;
