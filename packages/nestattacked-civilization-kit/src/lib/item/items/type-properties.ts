import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Type: string;
  Name: string;
  Value: string;
  PropertyType?: string;
}

interface FloatAttributes {
  Type?: string;
  Name?: string;
  Value?: string;
  PropertyType?: string;
}

const TypeProperties: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'TypeProperties'
);

export { TypeProperties };
