interface FixGreatPersonIndividualsAttributes {
  GreatPersonIndividualType: string;
  Name: string;
  GreatPersonClassType: string;
  EraType: string;
  ActionCharges: number;
  ActionRequiresOwnedTile?: boolean;
  ActionRequiresUnownedTile?: boolean;
  ActionRequiresAdjacentMountain?: boolean;
  ActionRequiresAdjacentOwnedTile?: boolean;
  ActionRequiresAdjacentBarbarianUnit?: boolean;
  ActionRequiresOnOrAdjacentNaturalWonder?: boolean;
  ActionRequiresOnOrAdjacentFeatureType?: string;
  ActionRequiresIncompleteWonder?: boolean;
  ActionRequiresIncompleteSpaceRaceProject?: boolean;
  ActionRequiresVisibleLuxury?: boolean;
  ActionRequiresNoMilitaryUnit?: boolean;
  ActionRequiresPlayerRelicSlot?: boolean;
  ActionRequiresMilitaryUnitDomain?: string;
  ActionRequiresUnitMilitaryFormation?: string;
  ActionRequiresCityGreatWorkObjectType?: string;
  ActionRequiresCompletedDistrictType?: string;
  ActionRequiresMissingBuildingType?: string;
  ActionRequiresGoldCost?: number;
  ActionNameTextOverride?: string;
  ActionEffectTextOverride?: string;
  ActionEffectTileHighlighting?: boolean;
  BirthNameTextOverride?: string;
  BirthEffectTextOverride?: string;
  AreaHighlightRadius?: number;
  Gender: string;
}

interface FloatGreatPersonIndividualsAttributes {
  GreatPersonIndividualType?: string;
  Name?: string;
  GreatPersonClassType?: string;
  EraType?: string;
  ActionCharges?: number;
  ActionRequiresOwnedTile?: boolean;
  ActionRequiresUnownedTile?: boolean;
  ActionRequiresAdjacentMountain?: boolean;
  ActionRequiresAdjacentOwnedTile?: boolean;
  ActionRequiresAdjacentBarbarianUnit?: boolean;
  ActionRequiresOnOrAdjacentNaturalWonder?: boolean;
  ActionRequiresOnOrAdjacentFeatureType?: string;
  ActionRequiresIncompleteWonder?: boolean;
  ActionRequiresIncompleteSpaceRaceProject?: boolean;
  ActionRequiresVisibleLuxury?: boolean;
  ActionRequiresNoMilitaryUnit?: boolean;
  ActionRequiresPlayerRelicSlot?: boolean;
  ActionRequiresMilitaryUnitDomain?: string;
  ActionRequiresUnitMilitaryFormation?: string;
  ActionRequiresCityGreatWorkObjectType?: string;
  ActionRequiresCompletedDistrictType?: string;
  ActionRequiresMissingBuildingType?: string;
  ActionRequiresGoldCost?: number;
  ActionNameTextOverride?: string;
  ActionEffectTextOverride?: string;
  ActionEffectTileHighlighting?: boolean;
  BirthNameTextOverride?: string;
  BirthEffectTextOverride?: string;
  AreaHighlightRadius?: number;
  Gender?: string;
}

export function createGreatPersonIndividuals(attributes: FixGreatPersonIndividualsAttributes): void;
