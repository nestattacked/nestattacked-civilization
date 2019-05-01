import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  Government: string;
  Era: string;
  Change?: boolean;
}

interface FloatAttributes {
  Government?: string;
  Era?: string;
  Change?: boolean;
}

const StartingGovernments: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'StartingGovernments'
);

export { StartingGovernments };
