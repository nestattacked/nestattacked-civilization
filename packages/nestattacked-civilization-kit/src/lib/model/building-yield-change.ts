import { createModel, Model } from './create-model';

interface FixAttributes {
  BuildingType: string;
  YieldType: string;
  YieldChange: number;
}

interface FloatAttributes {
  BuildingType?: string;
  YieldType?: string;
  YieldChange?: number;
}

const BuildingYieldChange: Model<FixAttributes, FloatAttributes> = createModel(
  'Building_YieldChanges'
);

export { BuildingYieldChange };
