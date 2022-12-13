import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validateUser } from '../middlewares/user.middleware';

const router = Router();

const userController = new UserController();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', validateUser, userController.create);
router.put('/:id', validateUser, userController.update);
router.delete('/:id', userController.remove);

export default router;