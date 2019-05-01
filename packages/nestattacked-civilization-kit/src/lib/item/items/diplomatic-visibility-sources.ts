import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  VisibilitySourceType: string;
  Description: string;
  ActionDescription: string;
  GossipString: string;
  Trader?: boolean;
  Delegate?: boolean;
  Ally?: boolean;
  Spy?: boolean;
  PrereqTech?: string;
  TraitType?: string;
  GreatPersonIndividualType?: string;
  FromCitizen?: boolean;
  LevelRequired?: number;
}

interface FloatAttributes {
  VisibilitySourceType?: string;
  Description?: string;
  ActionDescription?: string;
  GossipString?: string;
  Trader?: boolean;
  Delegate?: boolean;
  Ally?: boolean;
  Spy?: boolean;
  PrereqTech?: string;
  TraitType?: string;
  GreatPersonIndividualType?: string;
  FromCitizen?: boolean;
  LevelRequired?: number;
}

const DiplomaticVisibilitySources: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomaticVisibilitySources'
);

export { DiplomaticVisibilitySources };
