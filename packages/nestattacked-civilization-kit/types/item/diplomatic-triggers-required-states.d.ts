interface FixDiplomaticTriggersRequiredStatesAttributes {
  TriggerType: string;
  RequiredState: string;
}

interface FloatDiplomaticTriggersRequiredStatesAttributes {
  TriggerType?: string;
  RequiredState?: string;
}

export function createDiplomaticTriggersRequiredStates(attributes: FixDiplomaticTriggersRequiredStatesAttributes): void;
