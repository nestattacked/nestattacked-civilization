import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const GreatPersonIndividuals: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'GreatPersonIndividuals'
);

export { GreatPersonIndividuals };
