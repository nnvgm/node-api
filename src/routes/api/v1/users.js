import express from 'express';

import * as UserController from '../../../controllers/users';

const router = express.Router();

router.get('/', UserController.GetUser);
router.post('/', UserController.CreateUser);
router.put('/:id', UserController.UpdateUser);
router.delete('/:id', UserController.DeleteUser);

export default router;
