import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ShapeName: string;
  ShapeId: number;
  MinChildren?: number;
  MaxChildren?: number;
  Description: string;
}

interface FloatAttributes {
  ShapeName?: string;
  ShapeId?: number;
  MinChildren?: number;
  MaxChildren?: number;
  Description?: string;
}

const ShapeDefinitions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'ShapeDefinitions'
);

export { ShapeDefinitions };
