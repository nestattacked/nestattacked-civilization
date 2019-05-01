import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  MapRainfallType: string;
  Name?: string;
  Description?: string;
  AverageAmountPerYear?: number;
  Scale?: number;
}

interface FloatAttributes {
  MapRainfallType?: string;
  Name?: string;
  Description?: string;
  AverageAmountPerYear?: number;
  Scale?: number;
}

const MapRainfalls: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'MapRainfalls'
);

export { MapRainfalls };
