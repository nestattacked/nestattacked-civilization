interface FixDiplomaticStateActionsAttributes {
  StateType: number;
  DiplomaticActionType: number;
  AiAllowed?: boolean;
  Worth?: number;
  Cost?: number;
  TransitionToState?: string;
  TeamOnly?: boolean;
}

interface FloatDiplomaticStateActionsAttributes {
  StateType?: number;
  DiplomaticActionType?: number;
  AiAllowed?: boolean;
  Worth?: number;
  Cost?: number;
  TransitionToState?: string;
  TeamOnly?: boolean;
}

export function createDiplomaticStateActions(attributes: FixDiplomaticStateActionsAttributes): void;
