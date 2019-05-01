import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BuildingType: string;
  OldYieldType: string;
  NewYieldType: string;
}

interface FloatAttributes {
  BuildingType?: string;
  OldYieldType?: string;
  NewYieldType?: string;
}

const BuildingYieldDistrictCopies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Building_YieldDistrictCopies'
);

export { BuildingYieldDistrictCopies };
