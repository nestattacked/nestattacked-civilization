import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  Color?: string;
  Red?: number;
  Green?: number;
  Blue?: number;
  Alpha?: number;
}

interface FloatAttributes {
  Type?: string;
  Color?: string;
  Red?: number;
  Green?: number;
  Blue?: number;
  Alpha?: number;
}

const Colors: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Colors'
);

export { Colors };
