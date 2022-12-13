import { Router } from 'express';
import PostController from '../controllers/post.controller';
import { validatePost } from '../middlewares/post.middleware';

const router = Router();

const postController = new PostController();

router.get('/search', postController.querySearch)
router.get('/', postController.getAll);
router.get('/:id', postController.getById);
router.post('/', validatePost, postController.create);
router.put('/:id', validatePost, postController.update);
router.delete('/:id', postController.remove);

export default router;