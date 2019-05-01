import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  QuestType: string;
  Name: string;
  InstanceName?: string;
  Description: string;
  InstanceDescription?: string;
  Reward: string;
  InstanceReward?: string;
  IconString: string;
}

interface FloatAttributes {
  QuestType?: string;
  Name?: string;
  InstanceName?: string;
  Description?: string;
  InstanceDescription?: string;
  Reward?: string;
  InstanceReward?: string;
  IconString?: string;
}

const Quests: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Quests'
);

export { Quests };
