import { Application } from 'express';

import UserRoute from './user.route';

export default (app:Application) => {
  UserRoute(app);
};
