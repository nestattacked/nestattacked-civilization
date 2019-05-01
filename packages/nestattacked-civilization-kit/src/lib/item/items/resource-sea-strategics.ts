import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  MapArgument: number;
  Duel?: number;
  Tiny?: number;
  Small?: number;
  Standard?: number;
  Large?: number;
  Huge?: number;
}

interface FloatAttributes {
  MapArgument?: number;
  Duel?: number;
  Tiny?: number;
  Small?: number;
  Standard?: number;
  Large?: number;
  Huge?: number;
}

const ResourceSeaStrategics: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Resource_SeaStrategics'
);

export { ResourceSeaStrategics };
