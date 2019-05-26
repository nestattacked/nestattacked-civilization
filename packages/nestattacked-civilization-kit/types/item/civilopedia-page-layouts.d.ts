interface FixCivilopediaPageLayoutsAttributes {
  PageLayoutId: string;
  ScriptTemplate: string;
}

interface FloatCivilopediaPageLayoutsAttributes {
  PageLayoutId?: string;
  ScriptTemplate?: string;
}

export function createCivilopediaPageLayouts(attributes: FixCivilopediaPageLayoutsAttributes): void;
