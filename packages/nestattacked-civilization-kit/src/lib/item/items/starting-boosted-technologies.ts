import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Technology: string;
  Era: string;
}

interface FloatAttributes {
  Technology?: string;
  Era?: string;
}

const StartingBoostedTechnologies: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartingBoostedTechnologies'
);

export { StartingBoostedTechnologies };
