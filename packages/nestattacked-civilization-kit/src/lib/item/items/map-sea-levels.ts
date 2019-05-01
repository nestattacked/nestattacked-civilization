import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  MapSeaLevelType: string;
  Name: string;
  Description: string;
  Scale?: number;
}

interface FloatAttributes {
  MapSeaLevelType?: string;
  Name?: string;
  Description?: string;
  Scale?: number;
}

const MapSeaLevels: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'MapSeaLevels'
);

export { MapSeaLevels };
