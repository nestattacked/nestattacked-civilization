import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Leader: string;
  Name: string;
  Sequence: string;
  Initial?: string;
}

interface FloatAttributes {
  Leader?: string;
  Name?: string;
  Sequence?: string;
  Initial?: string;
}

const LeaderAnimations: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'LeaderAnimations'
);

export { LeaderAnimations };
