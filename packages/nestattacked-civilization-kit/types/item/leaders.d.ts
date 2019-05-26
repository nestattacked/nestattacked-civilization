interface FixLeadersAttributes {
  LeaderType: string;
  Name: string;
  OperationList?: string;
  IsBarbarianLeader?: boolean;
  InheritFrom?: string;
  SceneLayers?: number;
  Sex?: string;
  SameSexPercentage?: number;
}

interface FloatLeadersAttributes {
  LeaderType?: string;
  Name?: string;
  OperationList?: string;
  IsBarbarianLeader?: boolean;
  InheritFrom?: string;
  SceneLayers?: number;
  Sex?: string;
  SameSexPercentage?: number;
}

export function createLeaders(attributes: FixLeadersAttributes): void;
