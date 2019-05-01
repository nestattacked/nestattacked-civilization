import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  MapSizeType: string;
  GreatPersonClassType: string;
  MaxWorldInstances?: number;
}

interface FloatAttributes {
  MapSizeType?: string;
  GreatPersonClassType?: string;
  MaxWorldInstances?: number;
}

const MapGreatPersonClasses: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Map_GreatPersonClasses'
);

export { MapGreatPersonClasses };
