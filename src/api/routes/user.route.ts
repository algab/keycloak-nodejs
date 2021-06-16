import { Application, Router } from 'express';

import { UserController } from '../controllers/user.controller';
import verify from '../middlewares/auth.middleware';
import keycloak from '../../config/keycloak';

const router = Router();
const user = new UserController();

router.get('/public', user.public);
router.get('/protected', verify('protected'), user.protected);
router.get('/manager', keycloak().protect('manager'), user.manager);

export default (app:Application) => app.use('/users', router);
