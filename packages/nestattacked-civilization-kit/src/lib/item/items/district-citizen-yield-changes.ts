import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  YieldType: string;
  YieldChange?: number;
}

interface FloatAttributes {
  DistrictType?: string;
  YieldType?: string;
  YieldChange?: number;
}

const DistrictCitizenYieldChanges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'District_CitizenYieldChanges'
);

export { DistrictCitizenYieldChanges };
