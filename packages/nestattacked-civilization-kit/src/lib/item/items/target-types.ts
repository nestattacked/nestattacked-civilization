import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TargetType: string;
}

interface FloatAttributes {
  TargetType?: string;
}

const TargetTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TargetTypes'
);

export { TargetTypes };
