import Cars from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

export default class CarService {
  private createCarDomain(car: ICar): Cars {
    return new Cars(car);
  }

  public async registerNewCart(car: ICar) {
    const carsODM = new CarsODM();
    const newCar = await carsODM.create(car);

    return this.createCarDomain(newCar);
  }
}