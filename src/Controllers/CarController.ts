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

  public async findAll() {
    const allCars = await this.service.findAll();

    return this.res.status(200).json(allCars);
  }

  public async findById() {
    const { id } = this.req.params;
    const selectedCar = await this.service.findById(id);
    if (selectedCar?.length === 0) return this.res.status(404).json({ message: 'Car not found' });
    if (selectedCar === null) return this.res.status(422).json({ message: 'Invalid mongo id' });

    return this.res.status(200).json(selectedCar[0]);
  }

  public async updateOne() {
    const { id } = this.req.params;
    const infosToUpdate = this.req.body;
    const selectedCarToUpdate = await this.service.updateOne(id, infosToUpdate);
    if (selectedCarToUpdate?.length === 0) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    if (selectedCarToUpdate === null) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    return this.res.status(200).json(selectedCarToUpdate[0]);
  }
}