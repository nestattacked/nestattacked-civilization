import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  LeaderType: string;
  TraitType: string;
}

interface FloatAttributes {
  LeaderType?: string;
  TraitType?: string;
}

const LeaderTraits: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'LeaderTraits'
);

export { LeaderTraits };
