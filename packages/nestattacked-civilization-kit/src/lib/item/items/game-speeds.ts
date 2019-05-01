import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GameSpeedType: string;
  Name?: string;
  Description?: string;
  CostMultiplier?: number;
  CivicUnlockMaxCost: number;
  CivicUnlockPerTurnDrop: number;
  CivicUnlockMinCost: number;
}

interface FloatAttributes {
  GameSpeedType?: string;
  Name?: string;
  Description?: string;
  CostMultiplier?: number;
  CivicUnlockMaxCost?: number;
  CivicUnlockPerTurnDrop?: number;
  CivicUnlockMinCost?: number;
}

const GameSpeeds: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GameSpeeds'
);

export { GameSpeeds };
