interface FixUnitOperationsAttributes {
  OperationType: string;
  Description: string;
  Help?: string;
  DisabledHelp?: string;
  Icon: string;
  Sound?: string;
  VisibleInUI: boolean;
  HoldCycling?: boolean;
  CategoryInUI?: string;
  InterfaceMode?: string;
  PrereqTech?: string;
  PrereqCivic?: string;
  Turns?: number;
  BaseProbability?: number;
  LevelProbChange?: number;
  EnemyProbChange?: number;
  EnemyLevelProbChange?: number;
  TargetDistrict?: string;
  HotkeyId?: string;
  Offensive?: boolean;
}

interface FloatUnitOperationsAttributes {
  OperationType?: string;
  Description?: string;
  Help?: string;
  DisabledHelp?: string;
  Icon?: string;
  Sound?: string;
  VisibleInUI?: boolean;
  HoldCycling?: boolean;
  CategoryInUI?: string;
  InterfaceMode?: string;
  PrereqTech?: string;
  PrereqCivic?: string;
  Turns?: number;
  BaseProbability?: number;
  LevelProbChange?: number;
  EnemyProbChange?: number;
  EnemyLevelProbChange?: number;
  TargetDistrict?: string;
  HotkeyId?: string;
  Offensive?: boolean;
}

export function createUnitOperations(attributes: FixUnitOperationsAttributes): void;
