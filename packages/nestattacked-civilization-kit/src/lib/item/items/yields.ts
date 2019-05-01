import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  YieldType: string;
  Name: string;
  IconString: string;
  OccupiedCityChange?: number;
  DefaultValue?: number;
}

interface FloatAttributes {
  YieldType?: string;
  Name?: string;
  IconString?: string;
  OccupiedCityChange?: number;
  DefaultValue?: number;
}

const Yields: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Yields'
);

export { Yields };
