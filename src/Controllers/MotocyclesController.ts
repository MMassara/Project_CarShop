import { Request, Response, NextFunction } from 'express';
import IMotorcycles from '../Interfaces/IMotorcycles';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotocyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const { model, year, color, buyValue, engineCapacity, category, status } = this.req.body;
    const motorcycles: IMotorcycles = {
      model, 
      year, 
      color,
      buyValue,
      status, 
      category,
      engineCapacity,
    };

    try {
      const newMotocycle = await this.service.registerNewMotocycle(motorcycles);
      return this.res.status(201).json(newMotocycle);
    } catch (error) {
      this.next(error);
    }
  }
}