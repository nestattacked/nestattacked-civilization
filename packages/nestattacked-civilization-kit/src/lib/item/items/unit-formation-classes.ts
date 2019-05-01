import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  FormationClassType: string;
  Name: string;
}

interface FloatAttributes {
  FormationClassType?: string;
  Name?: string;
}

const UnitFormationClasses: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitFormationClasses'
);

export { UnitFormationClasses };
