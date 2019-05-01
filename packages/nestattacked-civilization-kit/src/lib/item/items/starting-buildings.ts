import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Building: string;
  Era: string;
  District: string;
  MinorOnly?: boolean;
  MinDifficulty: string;
}

interface FloatAttributes {
  Building?: string;
  Era?: string;
  District?: string;
  MinorOnly?: boolean;
  MinDifficulty?: string;
}

const StartingBuildings: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartingBuildings'
);

export { StartingBuildings };
