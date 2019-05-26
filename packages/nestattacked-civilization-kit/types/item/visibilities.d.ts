interface FixVisibilitiesAttributes {
  VisibilityType: string;
  Name: string;
  RevealAgendas?: boolean;
}

interface FloatVisibilitiesAttributes {
  VisibilityType?: string;
  Name?: string;
  RevealAgendas?: boolean;
}

export function createVisibilities(attributes: FixVisibilitiesAttributes): void;
