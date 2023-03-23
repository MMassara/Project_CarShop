import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotocyclesController from '../Controllers/MotocyclesController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());
routes.post('/cars/:id', (req, res, next) => new CarController(req, res, next).updateOne());
routes.post('/motorcycles', (req, res, next) => new MotocyclesController(req, res, next).create());

export default routes;