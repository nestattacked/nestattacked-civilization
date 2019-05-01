import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ModifierId: string;
  Name: string;
  Type?: string;
  Value: string;
  Extra?: string;
  SecondExtra?: string;
}

interface FloatAttributes {
  ModifierId?: string;
  Name?: string;
  Type?: string;
  Value?: string;
  Extra?: string;
  SecondExtra?: string;
}

const ModifierArguments: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ModifierArguments'
);

export { ModifierArguments };
