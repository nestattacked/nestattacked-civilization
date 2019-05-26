interface FixShapeDefinitionsAttributes {
  ShapeName: string;
  ShapeId: number;
  MinChildren?: number;
  MaxChildren?: number;
  Description: string;
}

interface FloatShapeDefinitionsAttributes {
  ShapeName?: string;
  ShapeId?: number;
  MinChildren?: number;
  MaxChildren?: number;
  Description?: string;
}

export function createShapeDefinitions(attributes: FixShapeDefinitionsAttributes): void;
