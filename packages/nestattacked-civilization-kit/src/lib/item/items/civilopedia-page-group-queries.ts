import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const CivilopediaPageGroupQueries: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageGroupQueries'
);

export { CivilopediaPageGroupQueries };
