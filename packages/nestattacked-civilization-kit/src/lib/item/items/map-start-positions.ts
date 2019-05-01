import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  MapStartPositionType: string;
  Name: string;
  Description: string;
  Scale?: number;
}

interface FloatAttributes {
  MapStartPositionType?: string;
  Name?: string;
  Description?: string;
  Scale?: number;
}

const MapStartPositions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'MapStartPositions'
);

export { MapStartPositions };
