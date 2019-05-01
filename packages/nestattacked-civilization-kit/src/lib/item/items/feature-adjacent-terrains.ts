import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  FeatureType: string;
  TerrainType: string;
}

interface FloatAttributes {
  FeatureType?: string;
  TerrainType?: string;
}

const FeatureAdjacentTerrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Feature_AdjacentTerrains'
);

export { FeatureAdjacentTerrains };
