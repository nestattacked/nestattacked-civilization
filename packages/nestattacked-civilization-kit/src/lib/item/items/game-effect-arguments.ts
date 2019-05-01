import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  Name: string;
  CommonName?: string;
  Description?: string;
  ArgumentType?: string;
  DefaultValue?: string;
  Required?: boolean;
  MinValue?: string;
  MaxValue?: string;
  DatabaseKind?: string;
}

interface FloatAttributes {
  Type?: string;
  Name?: string;
  CommonName?: string;
  Description?: string;
  ArgumentType?: string;
  DefaultValue?: string;
  Required?: boolean;
  MinValue?: string;
  MaxValue?: string;
  DatabaseKind?: string;
}

const GameEffectArguments: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GameEffectArguments'
);

export { GameEffectArguments };
