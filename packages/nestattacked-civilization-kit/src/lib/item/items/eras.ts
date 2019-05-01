import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  EraType: string;
  Name: string;
  Description?: string;
  ChronologyIndex: number;
  WarmongerPoints?: number;
  GreatPersonBaseCost: number;
  EraTechBackgroundTexture?: string;
  EraCivicBackgroundTexture?: string;
  WarmongerLevelDescription?: string;
  EmbarkedUnitStrength: number;
  EraTechBackgroundTextureOffsetX?: number;
  EraCivicBackgroundTextureOffsetX?: number;
  TechTreeLayoutMethod?: number;
}

interface FloatAttributes {
  EraType?: string;
  Name?: string;
  Description?: string;
  ChronologyIndex?: number;
  WarmongerPoints?: number;
  GreatPersonBaseCost?: number;
  EraTechBackgroundTexture?: string;
  EraCivicBackgroundTexture?: string;
  WarmongerLevelDescription?: string;
  EmbarkedUnitStrength?: number;
  EraTechBackgroundTextureOffsetX?: number;
  EraCivicBackgroundTextureOffsetX?: number;
  TechTreeLayoutMethod?: number;
}

const Eras: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Eras'
);

export { Eras };
