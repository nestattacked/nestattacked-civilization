import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  YieldChangeId: string;
}

interface FloatAttributes {
  DistrictType?: string;
  YieldChangeId?: string;
}

const DistrictAdjacencies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'District_Adjacencies'
);

export { DistrictAdjacencies };
