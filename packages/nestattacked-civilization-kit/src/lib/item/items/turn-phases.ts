import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ID: number;
  TurnPhaseType: string;
  PhaseOrder: number;
  TurnMode: string;
  ActiveSegmentType: string;
  InactiveSegmentType?: string;
}

interface FloatAttributes {
  ID?: number;
  TurnPhaseType?: string;
  PhaseOrder?: number;
  TurnMode?: string;
  ActiveSegmentType?: string;
  InactiveSegmentType?: string;
}

const TurnPhases: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TurnPhases'
);

export { TurnPhases };
