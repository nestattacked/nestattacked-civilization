interface FixDiplomaticStartStatesAttributes {
  PlayerCivLevel: string;
  OpponentCivLevel: string;
  DiplomaticStateType: string;
}

interface FloatDiplomaticStartStatesAttributes {
  PlayerCivLevel?: string;
  OpponentCivLevel?: string;
  DiplomaticStateType?: string;
}

export function createDiplomaticStartStates(attributes: FixDiplomaticStartStatesAttributes): void;
