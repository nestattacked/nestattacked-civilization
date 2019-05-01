import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  AgendaType: string;
  OperationList?: string;
  Name: string;
  Description: string;
}

interface FloatAttributes {
  AgendaType?: string;
  OperationList?: string;
  Name?: string;
  Description?: string;
}

const Agendas: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Agendas'
);

export { Agendas };
