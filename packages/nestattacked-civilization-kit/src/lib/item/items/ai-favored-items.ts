import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ListType: string;
  Item: string;
  Favored: boolean;
  Value: number;
  StringVal: string;
  MinDifficulty?: string;
  MaxDifficulty?: string;
}

interface FloatAttributes {
  ListType?: string;
  Item?: string;
  Favored?: boolean;
  Value?: number;
  StringVal?: string;
  MinDifficulty?: string;
  MaxDifficulty?: string;
}

const AiFavoredItems: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiFavoredItems'
);

export { AiFavoredItems };
