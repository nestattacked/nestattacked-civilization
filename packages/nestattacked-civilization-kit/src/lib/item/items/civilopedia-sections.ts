import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SectionId: string;
  Name: string;
  Icon?: string;
  SortIndex?: number;
}

interface FloatAttributes {
  SectionId?: string;
  Name?: string;
  Icon?: string;
  SortIndex?: number;
}

const CivilopediaSections: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaSections'
);

export { CivilopediaSections };
