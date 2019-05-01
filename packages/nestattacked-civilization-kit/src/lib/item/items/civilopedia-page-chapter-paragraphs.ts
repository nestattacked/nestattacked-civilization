import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  SectionId: string;
  PageId: string;
  ChapterId: string;
  Paragraph: string;
  SortIndex?: number;
}

interface FloatAttributes {
  SectionId?: string;
  PageId?: string;
  ChapterId?: string;
  Paragraph?: string;
  SortIndex?: number;
}

const CivilopediaPageChapterParagraphs: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageChapterParagraphs'
);

export { CivilopediaPageChapterParagraphs };
