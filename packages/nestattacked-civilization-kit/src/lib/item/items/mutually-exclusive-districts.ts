import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  District: string;
  MutuallyExclusiveDistrict: string;
}

interface FloatAttributes {
  District?: string;
  MutuallyExclusiveDistrict?: string;
}

const MutuallyExclusiveDistricts: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'MutuallyExclusiveDistricts'
);

export { MutuallyExclusiveDistricts };
