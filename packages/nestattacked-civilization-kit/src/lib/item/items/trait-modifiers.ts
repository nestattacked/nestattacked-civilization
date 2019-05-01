import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TraitType: string;
  ModifierId: string;
}

interface FloatAttributes {
  TraitType?: string;
  ModifierId?: string;
}

const TraitModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TraitModifiers'
);

export { TraitModifiers };
