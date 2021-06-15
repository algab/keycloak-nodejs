import express from 'express';
import { config } from 'dotenv';

import routes from './app/routes';
import keycloak from './config/keycloak';

config();

const app = express();

app.set('PORT', process.env.PORT);
app.use(keycloak().middleware());

routes(app);

app.listen(process.env.PORT, () => console.log(`Server Running on Port ${process.env.PORT}`));
