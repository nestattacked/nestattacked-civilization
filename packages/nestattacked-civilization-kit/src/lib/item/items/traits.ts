import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TraitType: string;
  Name?: string;
  Description?: string;
  InternalOnly?: boolean;
}

interface FloatAttributes {
  TraitType?: string;
  Name?: string;
  Description?: string;
  InternalOnly?: boolean;
}

const Traits: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Traits'
);

export { Traits };
