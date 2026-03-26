import express from 'express';
import { obtenerCorredores, obtenerCorredorPorId} from '../controllers/corredorController.js';

const router = express.Router();

router.get('/', obtenerCorredores);
router.get('/:id', obtenerCorredorPorId);

export default router;