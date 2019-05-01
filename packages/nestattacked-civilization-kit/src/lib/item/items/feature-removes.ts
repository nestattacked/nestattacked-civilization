import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  FeatureType: string;
  YieldType: string;
  Yield?: number;
}

interface FloatAttributes {
  FeatureType?: string;
  YieldType?: string;
  Yield?: number;
}

const FeatureRemoves: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Feature_Removes'
);

export { FeatureRemoves };
