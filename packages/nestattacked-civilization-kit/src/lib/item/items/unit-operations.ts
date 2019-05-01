import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const UnitOperations: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitOperations'
);

export { UnitOperations };
