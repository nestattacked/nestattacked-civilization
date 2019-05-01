import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const CivilopediaPageQueries: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageQueries'
);

export { CivilopediaPageQueries };
