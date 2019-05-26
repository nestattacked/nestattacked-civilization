interface FixBuildingGreatWorksAttributes {
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

interface FloatBuildingGreatWorksAttributes {
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

export function createBuildingGreatWorks(attributes: FixBuildingGreatWorksAttributes): void;
