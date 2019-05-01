import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ModifierType: string;
  CollectionType: string;
  EffectType: string;
}

interface FloatAttributes {
  ModifierType?: string;
  CollectionType?: string;
  EffectType?: string;
}

const DynamicModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DynamicModifiers'
);

export { DynamicModifiers };
