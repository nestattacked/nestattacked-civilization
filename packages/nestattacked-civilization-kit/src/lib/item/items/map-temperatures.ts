import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  MapTemperatureType: string;
  Name: string;
  Description: string;
  AverageStartingTemperature?: number;
  Scale?: number;
}

interface FloatAttributes {
  MapTemperatureType?: string;
  Name?: string;
  Description?: string;
  AverageStartingTemperature?: number;
  Scale?: number;
}

const MapTemperatures: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'MapTemperatures'
);

export { MapTemperatures };
