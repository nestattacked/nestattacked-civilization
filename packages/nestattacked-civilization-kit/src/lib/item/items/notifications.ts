import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const Notifications: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Notifications'
);

export { Notifications };
