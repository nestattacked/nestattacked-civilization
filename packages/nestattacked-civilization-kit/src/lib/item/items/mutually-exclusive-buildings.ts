import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Building: string;
  MutuallyExclusiveBuilding: string;
}

interface FloatAttributes {
  Building?: string;
  MutuallyExclusiveBuilding?: string;
}

const MutuallyExclusiveBuildings: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'MutuallyExclusiveBuildings'
);

export { MutuallyExclusiveBuildings };
