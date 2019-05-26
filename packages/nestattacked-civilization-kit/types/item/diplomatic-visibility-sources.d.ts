interface FixDiplomaticVisibilitySourcesAttributes {
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

interface FloatDiplomaticVisibilitySourcesAttributes {
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

export function createDiplomaticVisibilitySources(attributes: FixDiplomaticVisibilitySourcesAttributes): void;
