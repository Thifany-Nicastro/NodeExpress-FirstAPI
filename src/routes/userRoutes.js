import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', userController.indexUser);
router.get('/:id', userController.showUser);
router.post('/', userController.storeUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router;