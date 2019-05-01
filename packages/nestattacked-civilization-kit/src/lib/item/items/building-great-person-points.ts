import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BuildingType: string;
  GreatPersonClassType: string;
  PointsPerTurn?: number;
}

interface FloatAttributes {
  BuildingType?: string;
  GreatPersonClassType?: string;
  PointsPerTurn?: number;
}

const BuildingGreatPersonPoints: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Building_GreatPersonPoints'
);

export { BuildingGreatPersonPoints };
