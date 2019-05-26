interface FixCivilopediaPageSearchTermQueriesAttributes {
  RowId: number;
  SQL: string;
  SectionIdColumn?: string;
  PageIdColumn?: string;
  SearchTermColumn?: string;
}

interface FloatCivilopediaPageSearchTermQueriesAttributes {
  RowId?: number;
  SQL?: string;
  SectionIdColumn?: string;
  PageIdColumn?: string;
  SearchTermColumn?: string;
}

export function createCivilopediaPageSearchTermQueries(attributes: FixCivilopediaPageSearchTermQueriesAttributes): void;
