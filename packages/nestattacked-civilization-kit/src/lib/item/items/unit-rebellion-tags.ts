import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Tag: string;
  RebellionLevel: number;
  NumCreated?: number;
  ForbiddenTag?: string;
}

interface FloatAttributes {
  Tag?: string;
  RebellionLevel?: number;
  NumCreated?: number;
  ForbiddenTag?: string;
}

const UnitRebellionTags: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Unit_RebellionTags'
);

export { UnitRebellionTags };
