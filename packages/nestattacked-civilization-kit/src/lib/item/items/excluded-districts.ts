import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  TraitType: string;
}

interface FloatAttributes {
  DistrictType?: string;
  TraitType?: string;
}

const ExcludedDistricts: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ExcludedDistricts'
);

export { ExcludedDistricts };
