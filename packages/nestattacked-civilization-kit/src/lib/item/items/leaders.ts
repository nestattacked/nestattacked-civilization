import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  LeaderType: string;
  Name: string;
  OperationList?: string;
  IsBarbarianLeader?: boolean;
  InheritFrom?: string;
  SceneLayers?: number;
  Sex?: string;
  SameSexPercentage?: number;
}

interface FloatAttributes {
  LeaderType?: string;
  Name?: string;
  OperationList?: string;
  IsBarbarianLeader?: boolean;
  InheritFrom?: string;
  SceneLayers?: number;
  Sex?: string;
  SameSexPercentage?: number;
}

const Leaders: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Leaders'
);

export { Leaders };
