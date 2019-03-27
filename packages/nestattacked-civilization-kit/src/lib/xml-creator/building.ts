import { createModel, Model } from './create-model';

interface FixAttributes {
  BuildingType: string;
  Name: string;
  PrereqDistrict: string;
  PurchaseYield: string;
  Cost: number;
  AdvisorType: string;
}

interface FloatAttributes {
  BuildingType?: string;
  Name?: string;
  PrereqDistrict?: string;
  PurchaseYield?: string;
  Cost?: number;
  AdvisorType?: string;
}

const Building: Model<FixAttributes, FloatAttributes> = createModel(
  'Buildings'
);

export { Building };
