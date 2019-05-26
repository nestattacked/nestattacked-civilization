interface FixAiFavoredItemsAttributes {
  ListType: string;
  Item: string;
  Favored: boolean;
  Value: number;
  StringVal: string;
  MinDifficulty?: string;
  MaxDifficulty?: string;
}

interface FloatAiFavoredItemsAttributes {
  ListType?: string;
  Item?: string;
  Favored?: boolean;
  Value?: number;
  StringVal?: string;
  MinDifficulty?: string;
  MaxDifficulty?: string;
}

export function createAiFavoredItems(attributes: FixAiFavoredItemsAttributes): void;
