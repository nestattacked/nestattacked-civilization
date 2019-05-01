import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  TypeName: string;
  DataId: number;
}

interface FloatAttributes {
  TypeName?: string;
  DataId?: number;
}

const DataTypes: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'DataTypes'
);

export { DataTypes };
