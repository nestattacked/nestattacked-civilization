interface FixUnitCommandsAttributes {
  CommandType: string;
  Description: string;
  Help?: string;
  DisabledHelp?: string;
  Icon: string;
  Sound?: string;
  VisibleInUI: boolean;
  HoldCycling?: boolean;
  CategoryInUI?: string;
  InterfaceMode?: string;
  PrereqTech?: string;
  PrereqCivic?: string;
  MaxEra?: number;
  HotkeyId?: string;
}

interface FloatUnitCommandsAttributes {
  CommandType?: string;
  Description?: string;
  Help?: string;
  DisabledHelp?: string;
  Icon?: string;
  Sound?: string;
  VisibleInUI?: boolean;
  HoldCycling?: boolean;
  CategoryInUI?: string;
  InterfaceMode?: string;
  PrereqTech?: string;
  PrereqCivic?: string;
  MaxEra?: number;
  HotkeyId?: string;
}

export function createUnitCommands(attributes: FixUnitCommandsAttributes): void;
