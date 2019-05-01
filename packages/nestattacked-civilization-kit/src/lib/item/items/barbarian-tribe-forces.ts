import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  AttackForceType: string;
  TribeType: string;
  SpecificTribeType: string;
}

interface FloatAttributes {
  AttackForceType?: string;
  TribeType?: string;
  SpecificTribeType?: string;
}

const BarbarianTribeForces: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'BarbarianTribeForces'
);

export { BarbarianTribeForces };
