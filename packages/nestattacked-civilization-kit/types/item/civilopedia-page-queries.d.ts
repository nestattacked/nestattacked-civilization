interface FixCivilopediaPageQueriesAttributes {
  RowId: number;
  SectionId: string;
  SQL: string;
  PageIdColumn?: string;
  PageGroupIdColumn?: string;
  PageLayoutIdColumn?: string;
  NameColumn?: string;
  TooltipColumn?: string;
  TextKeyPrefixColumn?: string;
  SortIndexColumn?: string;
  SortIndex?: number;
}

interface FloatCivilopediaPageQueriesAttributes {
  RowId?: number;
  SectionId?: string;
  SQL?: string;
  PageIdColumn?: string;
  PageGroupIdColumn?: string;
  PageLayoutIdColumn?: string;
  NameColumn?: string;
  TooltipColumn?: string;
  TextKeyPrefixColumn?: string;
  SortIndexColumn?: string;
  SortIndex?: number;
}

export function createCivilopediaPageQueries(attributes: FixCivilopediaPageQueriesAttributes): void;
