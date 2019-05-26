interface FixCivilopediaPageLayoutChaptersAttributes {
  PageLayoutId: string;
  ChapterId: string;
  SortIndex?: number;
}

interface FloatCivilopediaPageLayoutChaptersAttributes {
  PageLayoutId?: string;
  ChapterId?: string;
  SortIndex?: number;
}

export function createCivilopediaPageLayoutChapters(attributes: FixCivilopediaPageLayoutChaptersAttributes): void;
