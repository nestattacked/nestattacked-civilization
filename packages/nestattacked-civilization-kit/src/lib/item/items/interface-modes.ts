import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ModeType: string;
  Description: string;
  Help?: string;
  DisabledHelp?: string;
  Icon: string;
  VisibleInUI: boolean;
  CursorType: string;
}

interface FloatAttributes {
  ModeType?: string;
  Description?: string;
  Help?: string;
  DisabledHelp?: string;
  Icon?: string;
  VisibleInUI?: boolean;
  CursorType?: string;
}

const InterfaceModes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'InterfaceModes'
);

export { InterfaceModes };
