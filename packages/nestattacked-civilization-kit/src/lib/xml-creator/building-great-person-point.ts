import { createModel, Model } from './create-model';

interface FixAttributes {
  BuildingType: string;
  GreatPersonClassType: string;
  PointsPerTurn: number;
}

interface FloatAttributes {
  BuildingType?: string;
  GreatPersonClassType?: string;
  PointsPerTurn?: number;
}

const BuildingGreatPersonPoint: Model<
  FixAttributes,
  FloatAttributes
> = createModel('Building_GreatPersonPoints');

export { BuildingGreatPersonPoint };
