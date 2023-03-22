export default interface ICar {
  id?: string;
  model: string;
  year: number;
  status?: boolean;
  color: string;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}
