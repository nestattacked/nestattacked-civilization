import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TerrainClassType: string;
  Name: string;
}

interface FloatAttributes {
  TerrainClassType?: string;
  Name?: string;
}

const TerrainClasses: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TerrainClasses'
);

export { TerrainClasses };
