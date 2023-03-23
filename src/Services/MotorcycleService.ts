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

  public async findAll() {
    const motorcyclesODM = new MotorcyclesODM();
    const allMotorcycles = await motorcyclesODM.find();
    const allMotorcyclesArray = allMotorcycles
      .map((motorcycles) => this.createMotocyclesDomain(motorcycles));

    return allMotorcyclesArray;
  }

  public async findById(id: string) {
    const motorcyclesODM = new MotorcyclesODM();
    const selectedMotorcycle = await motorcyclesODM.findById(id);
    if (!selectedMotorcycle) return null;
    const selectedMotorcycleArray = selectedMotorcycle
      .map((motorcycle) => this.createMotocyclesDomain(motorcycle));
    
    return selectedMotorcycleArray;
  }
}