import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  MapResourceDistributionType: string;
  Name: string;
  Description: string;
  Scale?: number;
}

interface FloatAttributes {
  MapResourceDistributionType?: string;
  Name?: string;
  Description?: string;
  Scale?: number;
}

const MapResourceDistributions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'MapResourceDistributions'
);

export { MapResourceDistributions };
