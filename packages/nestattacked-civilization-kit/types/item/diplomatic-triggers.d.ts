interface FixDiplomaticTriggersAttributes {
  TriggerType: string;
}

interface FloatDiplomaticTriggersAttributes {
  TriggerType?: string;
}

export function createDiplomaticTriggers(attributes: FixDiplomaticTriggersAttributes): void;
