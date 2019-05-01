import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Unit: string;
  PrereqBuilding: string;
  NumSupported?: number;
}

interface FloatAttributes {
  Unit?: string;
  PrereqBuilding?: string;
  NumSupported?: number;
}

const UnitBuildingPrereqs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Unit_BuildingPrereqs'
);

export { UnitBuildingPrereqs };
