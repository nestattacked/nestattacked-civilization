import { createModel, Model } from './create-model';

interface FixAttributes {
  Type: string;
  Kind: string;
}

interface FloatAttributes {
  Type?: string;
  Kind?: string;
}

const Type: Model<FixAttributes, FloatAttributes> = createModel('Types');

export { Type };
