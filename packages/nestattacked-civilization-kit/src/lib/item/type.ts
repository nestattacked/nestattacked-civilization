interface Attribute {
  [key: string]: any;
}

enum Operator {
  Create,
  Update,
  Delete
}

interface Item {
  operator: Operator;
  table: string;
  value?: Attribute;
  condition?: Attribute;
}

export { Attribute, Operator, Item };
