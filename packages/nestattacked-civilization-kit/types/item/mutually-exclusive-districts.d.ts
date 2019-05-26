interface FixMutuallyExclusiveDistrictsAttributes {
  District: string;
  MutuallyExclusiveDistrict: string;
}

interface FloatMutuallyExclusiveDistrictsAttributes {
  District?: string;
  MutuallyExclusiveDistrict?: string;
}

export function createMutuallyExclusiveDistricts(attributes: FixMutuallyExclusiveDistrictsAttributes): void;
