interface FixFlavorsAttributes {
  FlavorType: string;
}

interface FloatFlavorsAttributes {
  FlavorType?: string;
}

export function createFlavors(attributes: FixFlavorsAttributes): void;
