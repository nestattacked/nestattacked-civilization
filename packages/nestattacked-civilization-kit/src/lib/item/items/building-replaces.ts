import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivUniqueBuildingType: string;
  ReplacesBuildingType: string;
}

interface FloatAttributes {
  CivUniqueBuildingType?: string;
  ReplacesBuildingType?: string;
}

const BuildingReplaces: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BuildingReplaces'
);

export { BuildingReplaces };
