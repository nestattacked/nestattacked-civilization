interface FixDiplomaticStateTransitionsAttributes {
  BaseState: string;
  TransitionState: string;
  RequireTransitionMax?: number;
  ThrottleTurns?: number;
  AllowTransitionMin?: number;
  RequireTransitionMin?: number;
  AllowTransitionMax?: number;
  AllowTransitionCheck: string;
  OnTransitionAction?: string;
}

interface FloatDiplomaticStateTransitionsAttributes {
  BaseState?: string;
  TransitionState?: string;
  RequireTransitionMax?: number;
  ThrottleTurns?: number;
  AllowTransitionMin?: number;
  RequireTransitionMin?: number;
  AllowTransitionMax?: number;
  AllowTransitionCheck?: string;
  OnTransitionAction?: string;
}

export function createDiplomaticStateTransitions(attributes: FixDiplomaticStateTransitionsAttributes): void;
