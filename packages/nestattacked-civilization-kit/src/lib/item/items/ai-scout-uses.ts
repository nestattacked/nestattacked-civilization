import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ScoutUseType: string;
}

interface FloatAttributes {
  ScoutUseType?: string;
}

const AiScoutUses: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AiScoutUses'
);

export { AiScoutUses };
