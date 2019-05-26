interface FixAiEventsAttributes {
  EventType: string;
}

interface FloatAiEventsAttributes {
  EventType?: string;
}

export function createAiEvents(attributes: FixAiEventsAttributes): void;
