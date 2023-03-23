import Motorcycles from '../Domains/Motorcycles';
import IMotorcycles from '../Interfaces/IMotorcycles';
import MotorcyclesODM from '../Models/MotorcyclesODM';

export default class MotorcycleSerivce {
  private createMotocyclesDomain(motorcycles: IMotorcycles): IMotorcycles {
    return new Motorcycles(motorcycles);
  }

  public async registerNewMotocycle(motorcycles: IMotorcycles) {
    const motocycleODM = new MotorcyclesODM();
    const newMotocycle = await motocycleODM.create(motorcycles);

    return this.createMotocyclesDomain(newMotocycle);
  }
}