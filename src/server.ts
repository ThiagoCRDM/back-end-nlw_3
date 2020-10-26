import express from 'express';
import './database/connection';
import routers from './routes';

import routes from './routes';


const app = express();

app.use(express.json());
app.use(routers);

app.listen(3333, () => {
    console.log('Server start port 3333!');
});