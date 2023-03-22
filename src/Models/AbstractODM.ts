import { Model, models, Schema, model, isValidObjectId } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async find(): Promise<T[]> {
    return this.model.find({}, { __v: false });
  }

  public async findById(id: string): Promise<T[] | null> {
    if (!isValidObjectId(id)) return null;
    return this.model.find({ _id: id }, { __v: false });
  }
}