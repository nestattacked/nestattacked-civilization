import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  AllowedMoveType: string;
  Value: number;
  IsHomeland?: boolean;
  IsTactical?: boolean;
}

interface FloatAttributes {
  AllowedMoveType?: string;
  Value?: number;
  IsHomeland?: boolean;
  IsTactical?: boolean;
}

const AllowedMoves: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'AllowedMoves'
);

export { AllowedMoves };
