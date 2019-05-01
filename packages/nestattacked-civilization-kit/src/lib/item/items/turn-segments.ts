import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const TurnSegments: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TurnSegments'
);

export { TurnSegments };
