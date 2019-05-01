import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  UnitAbilityType: string;
  Name?: string;
  Description?: string;
  Inactive?: boolean;
  ShowFloatTextWhenEarned?: boolean;
}

interface FloatAttributes {
  UnitAbilityType?: string;
  Name?: string;
  Description?: string;
  Inactive?: boolean;
  ShowFloatTextWhenEarned?: boolean;
}

const UnitAbilities: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitAbilities'
);

export { UnitAbilities };
