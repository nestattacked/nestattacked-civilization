interface FixGameEffectsAttributes {
  Type: string;
  CommonName?: string;
  Description?: string;
  Tags?: string;
  GameCapabilities?: string;
  ContextInterfaces?: string;
  SubjectInterfaces?: string;
  SupportsRemove?: boolean;
}

interface FloatGameEffectsAttributes {
  Type?: string;
  CommonName?: string;
  Description?: string;
  Tags?: string;
  GameCapabilities?: string;
  ContextInterfaces?: string;
  SubjectInterfaces?: string;
  SupportsRemove?: boolean;
}

export function createGameEffects(attributes: FixGameEffectsAttributes): void;
