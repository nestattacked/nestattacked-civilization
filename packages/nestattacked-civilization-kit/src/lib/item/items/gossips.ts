import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GossipType: string;
  VisibilityLevel?: number;
  Description?: string;
  Message: string;
  Filter?: boolean;
  ErasUntilObsolete?: number;
  LevelRequired?: number;
}

interface FloatAttributes {
  GossipType?: string;
  VisibilityLevel?: number;
  Description?: string;
  Message?: string;
  Filter?: boolean;
  ErasUntilObsolete?: number;
  LevelRequired?: number;
}

const Gossips: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Gossips'
);

export { Gossips };
