import IMotorcycles from '../Interfaces/IMotorcycles';

export default class Motorcycles {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected status?: boolean;
  protected color: string;
  protected buyValue: number;
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
  }: IMotorcycles) {
    this.id = id;
    this.model = model;
    this.color = color;
    this.status = status || false;
    this.year = year;
    this.buyValue = buyValue;
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public getId() {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getModel() {
    return this.model;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getYear() {
    return this.year;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getColor() {
    return this.color;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setBuyValue(value: number) {
    this.buyValue = value;
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