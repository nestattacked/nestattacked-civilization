import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  PageLayoutId: string;
  ChapterId: string;
  SortIndex?: number;
}

interface FloatAttributes {
  PageLayoutId?: string;
  ChapterId?: string;
  SortIndex?: number;
}

const CivilopediaPageLayoutChapters: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'CivilopediaPageLayoutChapters'
);

export { CivilopediaPageLayoutChapters };
