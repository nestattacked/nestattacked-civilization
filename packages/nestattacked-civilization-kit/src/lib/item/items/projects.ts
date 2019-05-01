import { ItemCreator } from '../util/item-creator';

interface FixAttributes {
  ProjectType: string;
  Name: string;
  ShortName: string;
  Description?: string;
  PopupText?: string;
  Cost: number;
  CostProgressionModel?: string;
  CostProgressionParam1?: number;
  PrereqTech?: string;
  PrereqCivic?: string;
  PrereqDistrict?: string;
  VisualBuildingType?: string;
  SpaceRace?: boolean;
  OuterDefenseRepair?: boolean;
  MaxPlayerInstances?: number;
  AmenitiesWhileActive?: number;
  PrereqResource?: string;
  AdvisorType?: string;
  WMD?: boolean;
}

interface FloatAttributes {
  ProjectType?: string;
  Name?: string;
  ShortName?: string;
  Description?: string;
  PopupText?: string;
  Cost?: number;
  CostProgressionModel?: string;
  CostProgressionParam1?: number;
  PrereqTech?: string;
  PrereqCivic?: string;
  PrereqDistrict?: string;
  VisualBuildingType?: string;
  SpaceRace?: boolean;
  OuterDefenseRepair?: boolean;
  MaxPlayerInstances?: number;
  AmenitiesWhileActive?: number;
  PrereqResource?: string;
  AdvisorType?: string;
  WMD?: boolean;
}

const Projects: ItemCreator<FixAttributes, FloatAttributes> = new ItemCreator(
  'Projects'
);

export { Projects };
