import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  BuildingType: string;
  GreatWorkSlotType: string;
  NumSlots?: number;
  ThemingUniquePerson?: boolean;
  ThemingSameObjectType?: boolean;
  ThemingUniqueCivs?: boolean;
  ThemingSameEras?: boolean;
  ThemingYieldMultiplier?: number;
  ThemingTourismMultiplier?: number;
  NonUniquePersonYield?: number;
  NonUniquePersonTourism?: number;
  ThemingBonusDescription?: string;
}

interface FloatAttributes {
  BuildingType?: string;
  GreatWorkSlotType?: string;
  NumSlots?: number;
  ThemingUniquePerson?: boolean;
  ThemingSameObjectType?: boolean;
  ThemingUniqueCivs?: boolean;
  ThemingSameEras?: boolean;
  ThemingYieldMultiplier?: number;
  ThemingTourismMultiplier?: number;
  NonUniquePersonYield?: number;
  NonUniquePersonTourism?: number;
  ThemingBonusDescription?: string;
}

const BuildingGreatWorks: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Building_GreatWorks'
);

export { BuildingGreatWorks };
