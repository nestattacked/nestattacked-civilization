import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const Victories: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Victories'
);

export { Victories };
