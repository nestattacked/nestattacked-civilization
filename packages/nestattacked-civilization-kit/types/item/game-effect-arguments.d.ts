interface FixGameEffectArgumentsAttributes {
  Type: string;
  Name: string;
  CommonName?: string;
  Description?: string;
  ArgumentType?: string;
  DefaultValue?: string;
  Required?: boolean;
  MinValue?: string;
  MaxValue?: string;
  DatabaseKind?: string;
}

interface FloatGameEffectArgumentsAttributes {
  Type?: string;
  Name?: string;
  CommonName?: string;
  Description?: string;
  ArgumentType?: string;
  DefaultValue?: string;
  Required?: boolean;
  MinValue?: string;
  MaxValue?: string;
  DatabaseKind?: string;
}

export function createGameEffectArguments(attributes: FixGameEffectArgumentsAttributes): void;
