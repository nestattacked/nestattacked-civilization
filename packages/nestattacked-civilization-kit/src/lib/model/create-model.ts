import { delete as del, insert, update } from 'sql-bricks';

interface Model<FixAttributes, FloatAttributes> {
  create(values: FixAttributes[]): void;
  update(setter: FloatAttributes, condition: FloatAttributes): void;
  delete(condition: FloatAttributes): void;
}

interface CreateModel {
  <FixAttributes, FloatAttributes>(tableName: string): Model<
    FixAttributes,
    FloatAttributes
  >;
}

const createModel: CreateModel = (tableName: string) => {
  return {
    create(values) {
      const sql: string =
        insert(tableName)
          .values(values)
          .toString() + ';';
      // tslint:disable-next-line
      console.log(sql);
    },
    update(setter, condition) {
      const sql: string =
        update(tableName)
          .set(setter)
          .where(condition)
          .toString() + ';';
      // tslint:disable-next-line
      console.log(sql);
    },
    delete(condition) {
      const sql: string =
        del(tableName)
          .where(condition)
          .toString() + ';';
      // tslint:disable-next-line
      console.log(sql);
    }
  };
};

export { createModel, Model };
