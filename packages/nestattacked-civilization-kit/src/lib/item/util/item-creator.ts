import { itemQueue } from './item-queue';
import { Operator } from '../type';

class ItemCreator<FixAttributes, FloatAttributes> {
  private table: string;
  constructor(table: string) {
    this.table = table;
  }
  public create(value: FixAttributes) {
    itemQueue.push({
      table: this.table,
      operator: Operator.Create,
      value
    });
  }
  public update(value: FloatAttributes, condition: FloatAttributes) {
    itemQueue.push({
      table: this.table,
      operator: Operator.Update,
      value,
      condition
    });
  }
  public delete(condition: FloatAttributes) {
    itemQueue.push({
      table: this.table,
      operator: Operator.Delete,
      condition
    });
  }
}

export { ItemCreator };
