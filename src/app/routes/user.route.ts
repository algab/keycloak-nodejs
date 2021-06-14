import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const user = new UserController();

router.get('/', user.user);
router.get('/manager', user.manager);

export default (app:any) => app.use('/users', router);
