interface FixCivilopediaPageChapterHeadersAttributes {
  SectionId: string;
  PageId: string;
  ChapterId: string;
  Header: string;
}

interface FloatCivilopediaPageChapterHeadersAttributes {
  SectionId?: string;
  PageId?: string;
  ChapterId?: string;
  Header?: string;
}

export function createCivilopediaPageChapterHeaders(attributes: FixCivilopediaPageChapterHeadersAttributes): void;
