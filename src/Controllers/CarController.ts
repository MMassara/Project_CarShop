import { Request, Response, NextFunction } from 'express';
import ICars from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const { model, year, color, buyValue, doorsQty, seatsQty, status } = this.req.body;
    const car: ICars = {
      model, 
      year, 
      color,
      buyValue,
      status, 
      doorsQty,
      seatsQty,
    };

    try {
      const newCar = await this.service.registerNewCart(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}