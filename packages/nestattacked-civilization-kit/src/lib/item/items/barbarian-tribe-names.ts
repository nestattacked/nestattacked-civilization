import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TribeNameType: string;
  TribeType: string;
  NumMilitary?: number;
  NumScouts?: number;
  PercentRangedUnits?: number;
  TurnsToWarriorSpawn?: number;
  TribeDisplayName: string;
  ScoutingBehaviorTree?: string;
  RaidingBehaviorTree?: string;
  RaidingBoldness?: number;
}

interface FloatAttributes {
  TribeNameType?: string;
  TribeType?: string;
  NumMilitary?: number;
  NumScouts?: number;
  PercentRangedUnits?: number;
  TurnsToWarriorSpawn?: number;
  TribeDisplayName?: string;
  ScoutingBehaviorTree?: string;
  RaidingBehaviorTree?: string;
  RaidingBoldness?: number;
}

const BarbarianTribeNames: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BarbarianTribeNames'
);

export { BarbarianTribeNames };
