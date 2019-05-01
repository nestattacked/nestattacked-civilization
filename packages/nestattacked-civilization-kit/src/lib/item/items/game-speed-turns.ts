import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GameSpeedType: string;
  MonthIncrement: number;
  TurnsPerIncrement: number;
}

interface FloatAttributes {
  GameSpeedType?: string;
  MonthIncrement?: number;
  TurnsPerIncrement?: number;
}

const GameSpeedTurns: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GameSpeed_Turns'
);

export { GameSpeedTurns };
