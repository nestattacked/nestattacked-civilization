import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  SubType: string;
  Initiator: string;
  Leader: string;
  Mood: string;
  StatementText?: string;
  ReasonText?: string;
  LeaderAnimation?: string;
  SceneEffect?: string;
  Selections?: string;
}

interface FloatAttributes {
  Type?: string;
  SubType?: string;
  Initiator?: string;
  Leader?: string;
  Mood?: string;
  StatementText?: string;
  ReasonText?: string;
  LeaderAnimation?: string;
  SceneEffect?: string;
  Selections?: string;
}

const DiplomacyStatements: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DiplomacyStatements'
);

export { DiplomacyStatements };
