interface FixTurnPhasesAttributes {
  ID: number;
  TurnPhaseType: string;
  PhaseOrder: number;
  TurnMode: string;
  ActiveSegmentType: string;
  InactiveSegmentType?: string;
}

interface FloatTurnPhasesAttributes {
  ID?: number;
  TurnPhaseType?: string;
  PhaseOrder?: number;
  TurnMode?: string;
  ActiveSegmentType?: string;
  InactiveSegmentType?: string;
}

export function createTurnPhases(attributes: FixTurnPhasesAttributes): void;
