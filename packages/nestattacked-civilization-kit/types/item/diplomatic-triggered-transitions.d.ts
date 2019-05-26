interface FixDiplomaticTriggeredTransitionsAttributes {
  TriggerType: string;
  CivilizationLevel: string;
  OpponentCivilizationLevel: string;
  TransitionState: string;
}

interface FloatDiplomaticTriggeredTransitionsAttributes {
  TriggerType?: string;
  CivilizationLevel?: string;
  OpponentCivilizationLevel?: string;
  TransitionState?: string;
}

export function createDiplomaticTriggeredTransitions(attributes: FixDiplomaticTriggeredTransitionsAttributes): void;
