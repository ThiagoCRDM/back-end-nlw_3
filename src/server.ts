import express from 'express';
import 'express-async-errors';

import path from 'path';

import './database/connection';

import routers from './routes';



const app = express();

app.use(express.json());
app.use(routers);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333, () => {
    console.log('Server start port 3333!');
});