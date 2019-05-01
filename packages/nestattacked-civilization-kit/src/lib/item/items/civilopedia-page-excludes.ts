import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SectionId: string;
  PageId: string;
}

interface FloatAttributes {
  SectionId?: string;
  PageId?: string;
}

const CivilopediaPageExcludes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageExcludes'
);

export { CivilopediaPageExcludes };
