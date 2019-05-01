import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ImprovementType: string;
  UnitType: string;
}

interface FloatAttributes {
  ImprovementType?: string;
  UnitType?: string;
}

const ImprovementValidBuildUnits: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Improvement_ValidBuildUnits'
);

export { ImprovementValidBuildUnits };
