interface FixCivilopediaPagesAttributes {
  SectionId: string;
  PageId: string;
  PageGroupId?: string;
  PageLayoutId: string;
  Name: string;
  Tooltip?: string;
  SortIndex?: number;
  TextKeyPrefix?: string;
}

interface FloatCivilopediaPagesAttributes {
  SectionId?: string;
  PageId?: string;
  PageGroupId?: string;
  PageLayoutId?: string;
  Name?: string;
  Tooltip?: string;
  SortIndex?: number;
  TextKeyPrefix?: string;
}

export function createCivilopediaPages(attributes: FixCivilopediaPagesAttributes): void;
