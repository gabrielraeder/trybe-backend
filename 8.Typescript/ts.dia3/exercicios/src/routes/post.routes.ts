import { Router } from 'express';
import PostController from '../controllers/post.controller';
import { validatePost } from '../middlewares/post.middleware';

const router = Router();

const userController = new PostController();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', validatePost, userController.create);
router.put('/:id', validatePost, userController.update);
router.delete('/:id', userController.remove);

export default router;