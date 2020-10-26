import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routers = Router();

routers.get('/orphanages', OrphanagesController.index);
routers.get('/orphanages/:id', OrphanagesController.show);
routers.post('/orphanages', OrphanagesController.create);


export default routers;