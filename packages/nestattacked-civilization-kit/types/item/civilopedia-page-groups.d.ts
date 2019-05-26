interface FixCivilopediaPageGroupsAttributes {
  SectionId: string;
  PageGroupId: string;
  Name: string;
  Tooltip?: string;
  VisibleIfEmpty?: boolean;
  SortIndex?: number;
}

interface FloatCivilopediaPageGroupsAttributes {
  SectionId?: string;
  PageGroupId?: string;
  Name?: string;
  Tooltip?: string;
  VisibleIfEmpty?: boolean;
  SortIndex?: number;
}

export function createCivilopediaPageGroups(attributes: FixCivilopediaPageGroupsAttributes): void;
