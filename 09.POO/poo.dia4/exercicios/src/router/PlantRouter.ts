import { Router } from 'express';
import PlantController from '../controllers/PlantController';
import plantMiddleware from '../middlewares/plantMiddleware';

const plantController = new PlantController();

const plantRouter = Router();

plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', plantMiddleware, (req, res, next) => plantController.create(req, res, next));
plantRouter.put('/', plantMiddleware, (req, res, next) => plantController.update(req, res, next));
plantRouter.delete('/:id', (req, res, next) => plantController.remove(req, res, next));

export default plantRouter;
