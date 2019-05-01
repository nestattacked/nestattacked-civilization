import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TeamName: string;
  OperationName: string;
  MinUnits?: number;
  MaxUnits?: number;
  InitialStrengthAdvantage?: number;
  OngoingStrengthAdvantage?: number;
  SafeRallyPoint?: boolean;
  Condition?: string;
}

interface FloatAttributes {
  TeamName?: string;
  OperationName?: string;
  MinUnits?: number;
  MaxUnits?: number;
  InitialStrengthAdvantage?: number;
  OngoingStrengthAdvantage?: number;
  SafeRallyPoint?: boolean;
  Condition?: string;
}

const AiOperationTeams: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiOperationTeams'
);

export { AiOperationTeams };
