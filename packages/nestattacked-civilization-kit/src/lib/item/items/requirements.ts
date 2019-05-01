import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  RequirementId: string;
  RequirementType: string;
  Likeliness?: number;
  Impact?: number;
  Inverse?: boolean;
  Reverse?: boolean;
  Persistent?: boolean;
  ProgressWeight?: number;
  Triggered?: boolean;
}

interface FloatAttributes {
  RequirementId?: string;
  RequirementType?: string;
  Likeliness?: number;
  Impact?: number;
  Inverse?: boolean;
  Reverse?: boolean;
  Persistent?: boolean;
  ProgressWeight?: number;
  Triggered?: boolean;
}

const Requirements: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Requirements'
);

export { Requirements };
