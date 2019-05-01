import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  CommonName?: string;
  Description?: string;
  Tags?: string;
  GameCapabilities?: string;
  ContextInterfaces?: string;
  SubjectInterfaces?: string;
  SupportsRemove?: boolean;
}

interface FloatAttributes {
  Type?: string;
  CommonName?: string;
  Description?: string;
  Tags?: string;
  GameCapabilities?: string;
  ContextInterfaces?: string;
  SubjectInterfaces?: string;
  SupportsRemove?: boolean;
}

const GameEffects: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GameEffects'
);

export { GameEffects };
