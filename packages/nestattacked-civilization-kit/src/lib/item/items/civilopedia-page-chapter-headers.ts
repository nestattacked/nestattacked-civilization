import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SectionId: string;
  PageId: string;
  ChapterId: string;
  Header: string;
}

interface FloatAttributes {
  SectionId?: string;
  PageId?: string;
  ChapterId?: string;
  Header?: string;
}

const CivilopediaPageChapterHeaders: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageChapterHeaders'
);

export { CivilopediaPageChapterHeaders };
