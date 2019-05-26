interface FixBarbarianTribeNamesAttributes {
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

interface FloatBarbarianTribeNamesAttributes {
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

export function createBarbarianTribeNames(attributes: FixBarbarianTribeNamesAttributes): void;
