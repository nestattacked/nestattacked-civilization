import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  Usage: string;
  PrimaryColor: string;
  SecondaryColor: string;
  TextColor?: string;
}

interface FloatAttributes {
  Type?: string;
  Usage?: string;
  PrimaryColor?: string;
  SecondaryColor?: string;
  TextColor?: string;
}

const PlayerColors: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'PlayerColors'
);

export { PlayerColors };
