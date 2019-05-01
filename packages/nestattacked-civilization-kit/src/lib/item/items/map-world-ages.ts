import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  MapWorldAgeType: string;
  Name: string;
  Description: string;
  YearsOld?: number;
  Scale?: number;
}

interface FloatAttributes {
  MapWorldAgeType?: string;
  Name?: string;
  Description?: string;
  YearsOld?: number;
  Scale?: number;
}

const MapWorldAges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'MapWorldAges'
);

export { MapWorldAges };
