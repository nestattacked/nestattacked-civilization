import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BuildingType: string;
  ModifierId: string;
}

interface FloatAttributes {
  BuildingType?: string;
  ModifierId?: string;
}

const BuildingModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BuildingModifiers'
);

export { BuildingModifiers };
