import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

export default class MotorcycleService {
  private createMotocyclesDomain(motorcycles: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycles);
  }

  public async registerNewMotocycle(motorcycle: IMotorcycle) {
    const motocycleODM = new MotorcyclesODM();
    const newMotocycle = await motocycleODM.create(motorcycle);

    return this.createMotocyclesDomain(newMotocycle);
  }
}