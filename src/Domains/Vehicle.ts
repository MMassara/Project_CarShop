import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected status?: boolean;
  protected color: string;
  protected buyValue: number;

  constructor({
    id,
    model,
    year,
    status,
    color,
    buyValue,
  }: IVehicle) {
    this.id = id;
    this.model = model;
    this.color = color;
    this.status = status || false;
    this.year = year;
    this.buyValue = buyValue;
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
}