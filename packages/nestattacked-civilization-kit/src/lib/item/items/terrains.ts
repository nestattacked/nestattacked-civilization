import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TerrainType: string;
  Name: string;
  Mountain?: boolean;
  Hills?: boolean;
  Water?: boolean;
  InfluenceCost: number;
  MovementCost: number;
  ShallowWater?: boolean;
  SightModifier?: number;
  SightThroughModifier?: number;
  Impassable?: boolean;
  DefenseModifier?: number;
  Appeal?: number;
  AntiquityPriority?: number;
}

interface FloatAttributes {
  TerrainType?: string;
  Name?: string;
  Mountain?: boolean;
  Hills?: boolean;
  Water?: boolean;
  InfluenceCost?: number;
  MovementCost?: number;
  ShallowWater?: boolean;
  SightModifier?: number;
  SightThroughModifier?: number;
  Impassable?: boolean;
  DefenseModifier?: number;
  Appeal?: number;
  AntiquityPriority?: number;
}

const Terrains: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Terrains'
);

export { Terrains };
