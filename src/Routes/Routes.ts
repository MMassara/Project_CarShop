import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotocycleController from '../Controllers/MotocycleController';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateOne());
routes.post('/motorcycles', (req, res, next) => new MotocycleController(req, res, next).create());

export default routes;