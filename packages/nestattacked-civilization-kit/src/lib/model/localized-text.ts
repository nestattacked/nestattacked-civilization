import { createModel, Model } from './create-model';

interface FixAttributes {
  Tag: string;
  Language: string;
  Text: string;
}

interface FloatAttributes {
  Tag?: string;
  Language?: string;
  Text?: string;
}

const LocalizedText: Model<FixAttributes, FloatAttributes> = createModel(
  'LocalizedText'
);

export { LocalizedText };
