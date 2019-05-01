import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ProjectType: string;
  GreatPersonClassType: string;
  Points?: number;
  PointProgressionModel?: string;
  PointProgressionParam1?: number;
}

interface FloatAttributes {
  ProjectType?: string;
  GreatPersonClassType?: string;
  Points?: number;
  PointProgressionModel?: string;
  PointProgressionParam1?: number;
}

const ProjectGreatPersonPoints: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Project_GreatPersonPoints'
);

export { ProjectGreatPersonPoints };
