import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Building: string;
  PrereqBuilding: string;
}

interface FloatAttributes {
  Building?: string;
  PrereqBuilding?: string;
}

const BuildingPrereqs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BuildingPrereqs'
);

export { BuildingPrereqs };
