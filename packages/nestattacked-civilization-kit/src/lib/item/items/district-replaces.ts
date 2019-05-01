import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivUniqueDistrictType: string;
  ReplacesDistrictType: string;
}

interface FloatAttributes {
  CivUniqueDistrictType?: string;
  ReplacesDistrictType?: string;
}

const DistrictReplaces: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DistrictReplaces'
);

export { DistrictReplaces };
