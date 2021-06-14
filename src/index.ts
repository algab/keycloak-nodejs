import express from 'express';
import { config } from 'dotenv';

import routes from './app/routes';

config();

const app = express();

app.set('PORT', process.env.PORT);

routes(app);

app.listen(process.env.PORT, () => console.log(`Server Running on Port ${process.env.PORT}`));
