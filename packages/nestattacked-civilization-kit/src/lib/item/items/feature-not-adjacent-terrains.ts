import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  FeatureType: string;
  TerrainType: string;
}

interface FloatAttributes {
  FeatureType?: string;
  TerrainType?: string;
}

const FeatureNotAdjacentTerrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Feature_NotAdjacentTerrains'
);

export { FeatureNotAdjacentTerrains };
