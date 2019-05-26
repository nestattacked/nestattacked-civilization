interface FixMutuallyExclusiveBuildingsAttributes {
  Building: string;
  MutuallyExclusiveBuilding: string;
}

interface FloatMutuallyExclusiveBuildingsAttributes {
  Building?: string;
  MutuallyExclusiveBuilding?: string;
}

export function createMutuallyExclusiveBuildings(attributes: FixMutuallyExclusiveBuildingsAttributes): void;
