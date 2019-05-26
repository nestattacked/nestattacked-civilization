interface FixTurnTimersAttributes {
  TurnTimerType: string;
  Name: string;
  Description: string;
}

interface FloatTurnTimersAttributes {
  TurnTimerType?: string;
  Name?: string;
  Description?: string;
}

export function createTurnTimers(attributes: FixTurnTimersAttributes): void;
