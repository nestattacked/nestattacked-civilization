import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  GreatPersonClassType: string;
  TraitType: string;
}

interface FloatAttributes {
  GreatPersonClassType?: string;
  TraitType?: string;
}

const ExcludedGreatPersonClasses: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ExcludedGreatPersonClasses'
);

export { ExcludedGreatPersonClasses };
