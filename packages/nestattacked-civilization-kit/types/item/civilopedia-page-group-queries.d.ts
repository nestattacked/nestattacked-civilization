interface FixCivilopediaPageGroupQueriesAttributes {
  RowId: number;
  SectionId: string;
  SQL: string;
  PageGroupIdColumn?: string;
  NameColumn?: string;
  TooltipColumn?: string;
  VisibleIfEmptyColumn?: string;
  SortIndexColumn?: string;
  SortIndex?: number;
}

interface FloatCivilopediaPageGroupQueriesAttributes {
  RowId?: number;
  SectionId?: string;
  SQL?: string;
  PageGroupIdColumn?: string;
  NameColumn?: string;
  TooltipColumn?: string;
  VisibleIfEmptyColumn?: string;
  SortIndexColumn?: string;
  SortIndex?: number;
}

export function createCivilopediaPageGroupQueries(attributes: FixCivilopediaPageGroupQueriesAttributes): void;
