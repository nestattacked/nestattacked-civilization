import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  Leader: string;
  Mood: string;
  Sort?: number;
  Key: string;
  Text: string;
  Tooltip?: string;
  DiplomaticActionType?: string;
}

interface FloatAttributes {
  Type?: string;
  Leader?: string;
  Mood?: string;
  Sort?: number;
  Key?: string;
  Text?: string;
  Tooltip?: string;
  DiplomaticActionType?: string;
}

const DiplomacySelections: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomacySelections'
);

export { DiplomacySelections };
