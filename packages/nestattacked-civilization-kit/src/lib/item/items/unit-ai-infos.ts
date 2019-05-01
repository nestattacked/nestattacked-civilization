import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  UnitType: string;
  AiType: string;
}

interface FloatAttributes {
  UnitType?: string;
  AiType?: string;
}

const UnitAiInfos: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitAiInfos'
);

export { UnitAiInfos };
