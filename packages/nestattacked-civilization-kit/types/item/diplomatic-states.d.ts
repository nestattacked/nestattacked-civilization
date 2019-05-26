interface FixDiplomaticStatesAttributes {
  StateType: string;
  Name: string;
  DiplomaticYieldBonus?: number;
  RelationshipLevel?: number;
}

interface FloatDiplomaticStatesAttributes {
  StateType?: string;
  Name?: string;
  DiplomaticYieldBonus?: number;
  RelationshipLevel?: number;
}

export function createDiplomaticStates(attributes: FixDiplomaticStatesAttributes): void;
