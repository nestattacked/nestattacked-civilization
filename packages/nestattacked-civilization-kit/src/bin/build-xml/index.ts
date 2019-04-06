import { buildItems } from './build-items';

type BuildXml = () => Promise<void>;

const buildXml: BuildXml = async () => {
  await buildItems('update-database', 'Update_Database.xml');
};

export { buildXml };
