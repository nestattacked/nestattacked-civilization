interface FixTurnSegmentsAttributes {
  TurnSegmentType: string;
  Name?: string;
  Sound?: string;
  AllowStrategicCommands?: boolean;
  AllowTacticalCommands?: boolean;
  TimeLimit_Base?: number;
  TimeLimit_PerCity?: number;
  TimeLimit_PerUnit?: number;
  AllowTurnUnready?: boolean;
}

interface FloatTurnSegmentsAttributes {
  TurnSegmentType?: string;
  Name?: string;
  Sound?: string;
  AllowStrategicCommands?: boolean;
  AllowTacticalCommands?: boolean;
  TimeLimit_Base?: number;
  TimeLimit_PerCity?: number;
  TimeLimit_PerUnit?: number;
  AllowTurnUnready?: boolean;
}

export function createTurnSegments(attributes: FixTurnSegmentsAttributes): void;
