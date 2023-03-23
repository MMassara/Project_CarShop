import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testa a camada service referente a Cars', function () {
  it('Verifica se é possível cadastrar um novo carro com sucesso', async function () {
    const newCarInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const newCarOutput: Car = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(newCarOutput);

    const service = new CarService();
    const result = await service.registerNewCart(newCarInput);

    expect(result).to.be.deep.equal(newCarOutput);
  });

  it('Verifica se é possível listar todos os carros cadastrados', async function () {
    const allCarsOutput: ICar[] = [{
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    }];

    sinon.stub(Model, 'find').resolves(allCarsOutput);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(allCarsOutput);
  });

  it('Verifica se é possível buscar pelo ID um carro cadastrado com sucesso', async function () {
    const selectedCarOutput: Car[] = [new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    })];

    sinon.stub(Model, 'find').resolves(selectedCarOutput);

    const service = new CarService();
    const result = await service.findById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(selectedCarOutput);
  });

  it('Verifica a resposta caso seja um MongoId inválido', async function () {
    sinon.stub(Model, 'find').resolves(undefined);

    const service = new CarService();

    const result = await service.findById('6348513f34c397abcad040b');

    expect(result).to.be.deep.equal(null);
  });

  it('Verifica a resposta caso não encontre o ID do carro pesquisado', async function () {
    sinon.stub(Model, 'find').resolves([]);

    const service = new CarService();
    const result = await service.findById('641caa34b6a13fe9bb7e1133');

    expect(result).to.be.deep.equal([]);
  });

  afterEach(function () {
    sinon.restore();
  });
});