import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected status?: boolean;
  protected color: string;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor({
    id,
    model,
    year,
    status,
    color,
    buyValue,
    doorsQty,
    seatsQty,
  }: ICar) {
    this.id = id;
    this.model = model;
    this.color = color;
    this.status = status || false;
    this.year = year;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
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

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setDoorsQty(qty: number) {
    this.doorsQty = qty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }

  public setSeatsQty(qty: number) {
    this.seatsQty = qty;
  }
}