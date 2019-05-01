import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  ModifierId: string;
}

interface FloatAttributes {
  DistrictType?: string;
  ModifierId?: string;
}

const DistrictModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DistrictModifiers'
);

export { DistrictModifiers };
