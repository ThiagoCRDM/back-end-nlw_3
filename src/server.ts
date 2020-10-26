import express from 'express';
import 'express-async-errors';

import path from 'path';

import './database/connection';
import errorHandler from './errors/handler';

import routers from './routes';



const app = express();

app.use(express.json());
app.use(routers);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333, () => {
    console.log('Server start port 3333!');
});