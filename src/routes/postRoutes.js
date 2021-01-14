import { Router } from 'express';
import * as postController from '../controllers/postController';

const router = Router();

router.get('/', postController.indexpost);
router.get('/:id', postController.showpost);
router.post('/', postController.storepost);
router.put('/:id', postController.updatepost);
router.delete('/:id', postController.deletepost);

export default router;