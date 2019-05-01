import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  UnitAbilityType: string;
  ModifierId: string;
}

interface FloatAttributes {
  UnitAbilityType?: string;
  ModifierId?: string;
}

const UnitAbilityModifiers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitAbilityModifiers'
);

export { UnitAbilityModifiers };
