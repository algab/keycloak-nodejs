import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import routes from './api/routes';
import keycloak from './config/keycloak';

config();

const app = express();

app.set('PORT', process.env.PORT);
app.use(cors());
app.use(keycloak().middleware());

routes(app);

app.listen(process.env.PORT, () => console.log(`Server Running on Port ${process.env.PORT}`));
