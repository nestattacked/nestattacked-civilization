import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  RowId: number;
  SQL: string;
  SectionIdColumn?: string;
  PageIdColumn?: string;
  SearchTermColumn?: string;
}

interface FloatAttributes {
  RowId?: number;
  SQL?: string;
  SectionIdColumn?: string;
  PageIdColumn?: string;
  SearchTermColumn?: string;
}

const CivilopediaPageSearchTermQueries: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageSearchTermQueries'
);

export { CivilopediaPageSearchTermQueries };
