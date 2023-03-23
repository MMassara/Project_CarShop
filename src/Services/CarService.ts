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

  public async findAll() {
    const carsODM = new CarsODM();
    const allCars = await carsODM.find();
    const allCarsArray = allCars.map((cars) => this.createCarDomain(cars));

    return allCarsArray;
  }

  public async findById(id: string) {
    const carsODM = new CarsODM();
    const selectedCar = await carsODM.findById(id);
    if (!selectedCar) return null;
    const selectedCarArray = selectedCar.map((car) => this.createCarDomain(car));
    
    return selectedCarArray;
  }

  public async updateOne(id: string, obj: object) {
    const carsODM = new CarsODM();
    const selectedCarToUpdate = await carsODM.update(id, obj);
    if (selectedCarToUpdate == null) return null;
    const selectedCarToUpdateArray = [selectedCarToUpdate].map((car) => this.createCarDomain(car));

    return selectedCarToUpdateArray;
  }
}