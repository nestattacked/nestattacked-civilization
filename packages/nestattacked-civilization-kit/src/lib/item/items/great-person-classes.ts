import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatPersonClassType: string;
  Name: string;
  UnitType: string;
  DistrictType: string;
  MaxPlayerInstances?: number;
  PseudoYieldType?: string;
  IconString: string;
  ActionIcon: string;
}

interface FloatAttributes {
  GreatPersonClassType?: string;
  Name?: string;
  UnitType?: string;
  DistrictType?: string;
  MaxPlayerInstances?: number;
  PseudoYieldType?: string;
  IconString?: string;
  ActionIcon?: string;
}

const GreatPersonClasses: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatPersonClasses'
);

export { GreatPersonClasses };
