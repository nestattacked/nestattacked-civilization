import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  GreatPersonClassType: string;
  PointsPerTurn?: number;
}

interface FloatAttributes {
  DistrictType?: string;
  GreatPersonClassType?: string;
  PointsPerTurn?: number;
}

const DistrictGreatPersonPoints: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'District_GreatPersonPoints'
);

export { DistrictGreatPersonPoints };
