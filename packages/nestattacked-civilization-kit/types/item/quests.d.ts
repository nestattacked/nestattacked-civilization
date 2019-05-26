interface FixQuestsAttributes {
  QuestType: string;
  Name: string;
  InstanceName?: string;
  Description: string;
  InstanceDescription?: string;
  Reward: string;
  InstanceReward?: string;
  IconString: string;
}

interface FloatQuestsAttributes {
  QuestType?: string;
  Name?: string;
  InstanceName?: string;
  Description?: string;
  InstanceDescription?: string;
  Reward?: string;
  InstanceReward?: string;
  IconString?: string;
}

export function createQuests(attributes: FixQuestsAttributes): void;
