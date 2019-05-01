import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ReligionType: string;
  Name: string;
  IconString: string;
  Pantheon?: boolean;
  RequiresCustomName?: boolean;
  Color: string;
}

interface FloatAttributes {
  ReligionType?: string;
  Name?: string;
  IconString?: string;
  Pantheon?: boolean;
  RequiresCustomName?: boolean;
  Color?: string;
}

const Religions: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Religions'
);

export { Religions };
