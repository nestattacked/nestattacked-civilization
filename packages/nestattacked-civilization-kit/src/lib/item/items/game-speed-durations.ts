import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GameSpeedScalingType: string;
  NumberOfTurnsOnStandard: number;
  NumberOfTurnsScaled: number;
}

interface FloatAttributes {
  GameSpeedScalingType?: string;
  NumberOfTurnsOnStandard?: number;
  NumberOfTurnsScaled?: number;
}

const GameSpeedDurations: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GameSpeed_Durations'
);

export { GameSpeedDurations };
