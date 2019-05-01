import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationType: string;
  TraitType: string;
}

interface FloatAttributes {
  CivilizationType?: string;
  TraitType?: string;
}

const CivilizationTraits: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilizationTraits'
);

export { CivilizationTraits };
