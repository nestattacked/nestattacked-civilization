import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
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

interface FloatAttributes {
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

const UnitCommands: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'UnitCommands'
);

export { UnitCommands };
