import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  CivilizationType: string;
  Tier?: number;
}

interface FloatAttributes {
  CivilizationType?: string;
  Tier?: number;
}

const StartBiasRivers: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartBiasRivers'
);

export { StartBiasRivers };
