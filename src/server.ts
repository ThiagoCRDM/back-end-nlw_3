import express from 'express';
import cors from 'cors';
import path from 'path';

import 'express-async-errors';
import './database/connection';

import routers from './routes';
import errorHandler from './errors/handler';



const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333, () => {
    console.log('Server start port 3333!');
});