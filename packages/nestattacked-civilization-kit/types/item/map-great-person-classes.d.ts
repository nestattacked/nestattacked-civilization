interface FixMapGreatPersonClassesAttributes {
  MapSizeType: string;
  GreatPersonClassType: string;
  MaxWorldInstances?: number;
}

interface FloatMapGreatPersonClassesAttributes {
  MapSizeType?: string;
  GreatPersonClassType?: string;
  MaxWorldInstances?: number;
}

export function createMapGreatPersonClasses(attributes: FixMapGreatPersonClassesAttributes): void;
