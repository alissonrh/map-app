import { Router } from 'express';

import LocationController from './controllers/location.controller';

const userController = new LocationController();

const router = Router()

router.get('/', userController.findAll);
router.post('/', userController.create);

export default router;