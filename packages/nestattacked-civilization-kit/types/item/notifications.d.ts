interface FixNotificationsAttributes {
  NotificationType: string;
  Message?: string;
  Summary?: string;
  SeverityType?: string;
  ExpiresEndOfTurn?: boolean;
  ExpiresEndOfNextTurn?: boolean;
  SubType?: string;
  AutoNotify?: boolean;
  GroupType?: string;
  Icon?: string;
  AutoActivate?: boolean;
  VisibleInUI?: boolean;
  ShowIconSinglePlayer?: boolean;
}

interface FloatNotificationsAttributes {
  NotificationType?: string;
  Message?: string;
  Summary?: string;
  SeverityType?: string;
  ExpiresEndOfTurn?: boolean;
  ExpiresEndOfNextTurn?: boolean;
  SubType?: string;
  AutoNotify?: boolean;
  GroupType?: string;
  Icon?: string;
  AutoActivate?: boolean;
  VisibleInUI?: boolean;
  ShowIconSinglePlayer?: boolean;
}

export function createNotifications(attributes: FixNotificationsAttributes): void;
