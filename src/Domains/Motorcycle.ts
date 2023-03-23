import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor({
    id,
    model, 
    year,
    status,
    color,
    buyValue,
    category,
    engineCapacity,
  }: IMotorcycle) {
    super({ id, model, year, status, color, buyValue });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public getCategory() {
    return this.category;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEngineCapacity(qty: number) {
    this.engineCapacity = qty;
  }
}