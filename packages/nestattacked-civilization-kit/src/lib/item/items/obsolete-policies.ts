import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  PolicyType: string;
  ObsoletePolicy: string;
  RequiresAvailableGreatPersonClass?: string;
}

interface FloatAttributes {
  PolicyType?: string;
  ObsoletePolicy?: string;
  RequiresAvailableGreatPersonClass?: string;
}

const ObsoletePolicies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ObsoletePolicies'
);

export { ObsoletePolicies };
