import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BuildingType: string;
  YieldType: string;
  YieldChange?: number;
}

interface FloatAttributes {
  BuildingType?: string;
  YieldType?: string;
  YieldChange?: number;
}

const BuildingYieldsPerEra: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Building_YieldsPerEra'
);

export { BuildingYieldsPerEra };
