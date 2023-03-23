import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycles from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testa a camada service referente a Motorcycles', function () {
  it('Verifica se é possível cadastrar uma nova moto com sucesso', async function () {
    const newMotorcycleInput: IMotorcycles = {
      model: 'Honda Cb 600f',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const newMotorcycleOutput: Motorcycle = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });

    sinon.stub(Model, 'create').resolves(newMotorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.registerNewMotocycle(newMotorcycleInput);

    expect(result).to.be.deep.equal(newMotorcycleOutput);
  });

  it('Verifica se é possível listar todos as motos cadastradas', async function () {
    const allMotorcyclesOutput: IMotorcycles[] = [{
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    }];

    sinon.stub(Model, 'find').resolves(allMotorcyclesOutput);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(allMotorcyclesOutput);
  });

  it('Verifica se é possível buscar pelo ID uma moto cadastrada com sucesso', async function () {
    const selectedMotocycleOutput: Motorcycle[] = [new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    })];

    sinon.stub(Model, 'find').resolves(selectedMotocycleOutput);

    const service = new MotorcycleService();
    const result = await service.findById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(selectedMotocycleOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});