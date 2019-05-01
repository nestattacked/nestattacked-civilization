import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  AiType: string;
  TypeValue?: number;
  Priority?: boolean;
}

interface FloatAttributes {
  AiType?: string;
  TypeValue?: number;
  Priority?: boolean;
}

const UnitAiTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitAiTypes'
);

export { UnitAiTypes };
