import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  LeaderType: string;
  ForegroundImage?: string;
  BackgroundImage?: string;
  EraText?: string;
  LeaderText?: string;
  PlayDawnOfManAudio?: boolean;
}

interface FloatAttributes {
  LeaderType?: string;
  ForegroundImage?: string;
  BackgroundImage?: string;
  EraText?: string;
  LeaderText?: string;
  PlayDawnOfManAudio?: boolean;
}

const LoadingInfo: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'LoadingInfo'
);

export { LoadingInfo };
