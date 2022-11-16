import { Router } from 'express';

import UserController from './controllers/user.controller';

const userController = new UserController();

const router = Router()

router.get('/', userController.findAll);
router.post('/', userController.store);

export default router;