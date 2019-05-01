import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GameSpeedScalingType: string;
  GameSpeedType: string;
  ScalingType: string;
  DefaultCostMultiplier?: number;
}

interface FloatAttributes {
  GameSpeedScalingType?: string;
  GameSpeedType?: string;
  ScalingType?: string;
  DefaultCostMultiplier?: number;
}

const GameSpeedScalings: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GameSpeed_Scalings'
);

export { GameSpeedScalings };
