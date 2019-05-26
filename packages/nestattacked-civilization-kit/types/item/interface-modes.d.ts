interface FixInterfaceModesAttributes {
  ModeType: string;
  Description: string;
  Help?: string;
  DisabledHelp?: string;
  Icon: string;
  VisibleInUI: boolean;
  CursorType: string;
}

interface FloatInterfaceModesAttributes {
  ModeType?: string;
  Description?: string;
  Help?: string;
  DisabledHelp?: string;
  Icon?: string;
  VisibleInUI?: boolean;
  CursorType?: string;
}

export function createInterfaceModes(attributes: FixInterfaceModesAttributes): void;
