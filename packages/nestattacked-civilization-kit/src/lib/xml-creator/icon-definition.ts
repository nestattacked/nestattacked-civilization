import { createModel, Model } from './create-model';

interface FixAttributes {
  Name: string;
  Atlas: string;
  Index: number;
}

interface FloatAttributes {
  Name?: string;
  Atlas?: string;
  Index?: number;
}

const IconDefinition: Model<FixAttributes, FloatAttributes> = createModel(
  'IconDefinitions'
);

export { IconDefinition };
