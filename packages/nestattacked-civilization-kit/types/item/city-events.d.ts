interface FixCityEventsAttributes {
  EventType: string;
}

interface FloatCityEventsAttributes {
  EventType?: string;
}

export function createCityEvents(attributes: FixCityEventsAttributes): void;
