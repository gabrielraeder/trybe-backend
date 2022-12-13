import { Router } from 'express';
import UserController from '../controllers/user.controller';
import { validateUser } from '../middlewares/user.middleware';
import { authValidate } from '../middlewares/auth.middleware';

const router = Router();

const userController = new UserController();

router.get('/', authValidate, userController.getAll);
router.get('/:id', authValidate, userController.getById);
router.post('/login', userController.login);
router.post('/', authValidate, validateUser, userController.create);
router.put('/:id', authValidate, validateUser, userController.update);
router.delete('/:id', authValidate, userController.remove);

export default router;