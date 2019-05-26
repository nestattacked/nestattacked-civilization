interface FixGameCapabilitiesAttributes {
  GameCapability: string;
}

interface FloatGameCapabilitiesAttributes {
  GameCapability?: string;
}

export function createGameCapabilities(attributes: FixGameCapabilitiesAttributes): void;
