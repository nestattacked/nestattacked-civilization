interface FixCalendarsAttributes {
  CalendarType: string;
  Description?: string;
}

interface FloatCalendarsAttributes {
  CalendarType?: string;
  Description?: string;
}

export function createCalendars(attributes: FixCalendarsAttributes): void;
