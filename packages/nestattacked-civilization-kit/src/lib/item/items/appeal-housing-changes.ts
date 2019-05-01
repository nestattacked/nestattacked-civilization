import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  DistrictType: string;
  MinimumValue: number;
  AppealChange: number;
  Description: string;
}

interface FloatAttributes {
  DistrictType?: string;
  MinimumValue?: number;
  AppealChange?: number;
  Description?: string;
}

const AppealHousingChanges: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AppealHousingChanges'
);

export { AppealHousingChanges };
