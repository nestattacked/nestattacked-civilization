interface FixExcludedDistrictsAttributes {
  DistrictType: string;
  TraitType: string;
}

interface FloatExcludedDistrictsAttributes {
  DistrictType?: string;
  TraitType?: string;
}

export function createExcludedDistricts(attributes: FixExcludedDistrictsAttributes): void;
