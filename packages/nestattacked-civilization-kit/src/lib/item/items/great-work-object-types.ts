import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatWorkObjectType: string;
  Value: number;
  PseudoYieldType: string;
  Name: string;
  IconString: string;
}

interface FloatAttributes {
  GreatWorkObjectType?: string;
  Value?: number;
  PseudoYieldType?: string;
  Name?: string;
  IconString?: string;
}

const GreatWorkObjectTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatWorkObjectTypes'
);

export { GreatWorkObjectTypes };
