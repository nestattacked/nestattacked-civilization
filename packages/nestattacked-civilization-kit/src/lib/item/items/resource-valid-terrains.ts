import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ResourceType: string;
  TerrainType: string;
}

interface FloatAttributes {
  ResourceType?: string;
  TerrainType?: string;
}

const ResourceValidTerrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Resource_ValidTerrains'
);

export { ResourceValidTerrains };
