import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  PolicyType: string;
  Description?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  Name: string;
  GovernmentSlotType: string;
  RequiresGovernmentUnlock?: boolean;
  ExplicitUnlock?: boolean;
}

interface FloatAttributes {
  PolicyType?: string;
  Description?: string;
  PrereqCivic?: string;
  PrereqTech?: string;
  Name?: string;
  GovernmentSlotType?: string;
  RequiresGovernmentUnlock?: boolean;
  ExplicitUnlock?: boolean;
}

const Policies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Policies'
);

export { Policies };
