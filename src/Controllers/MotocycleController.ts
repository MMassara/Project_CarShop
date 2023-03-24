import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
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
    const motorcycles: IMotorcycle = {
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

  public async findAll() {
    const allMotorcycles = await this.service.findAll();

    return this.res.status(200).json(allMotorcycles);
  }

  public async findById() {
    const { id } = this.req.params;
    const selectedMotorcycle = await this.service.findById(id);
    if (selectedMotorcycle === null) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    if (selectedMotorcycle?.length === 0) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(selectedMotorcycle[0]);
  }

  public async updateOne() {
    const { id } = this.req.params;
    const infosToUpdate = this.req.body;

    try {
      const selectedMotorcycleToUpdate = await this.service.updateOne(id, infosToUpdate);
      if (selectedMotorcycleToUpdate === null) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(selectedMotorcycleToUpdate[0]);
    } catch (err) {
      const error = err as Error;
      return this.res.status(422).json({ message: error.message });
    }
  }
}