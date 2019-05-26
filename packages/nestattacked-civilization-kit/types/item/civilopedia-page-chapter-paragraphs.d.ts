interface FixCivilopediaPageChapterParagraphsAttributes {
  SectionId: string;
  PageId: string;
  ChapterId: string;
  Paragraph: string;
  SortIndex?: number;
}

interface FloatCivilopediaPageChapterParagraphsAttributes {
  SectionId?: string;
  PageId?: string;
  ChapterId?: string;
  Paragraph?: string;
  SortIndex?: number;
}

export function createCivilopediaPageChapterParagraphs(attributes: FixCivilopediaPageChapterParagraphsAttributes): void;
