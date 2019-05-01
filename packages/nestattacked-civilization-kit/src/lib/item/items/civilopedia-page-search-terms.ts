import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SectionId: string;
  PageId: string;
  Term: string;
}

interface FloatAttributes {
  SectionId?: string;
  PageId?: string;
  Term?: string;
}

const CivilopediaPageSearchTerms: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageSearchTerms'
);

export { CivilopediaPageSearchTerms };
