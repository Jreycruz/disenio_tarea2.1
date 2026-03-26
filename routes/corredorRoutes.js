import express from 'express';
import { 
  obtenerCorredores,
  obtenerCorredorPorId,
  registrarCorredor
} from '../controllers/corredorController.js';

const router = express.Router();

router.get('/', obtenerCorredores);
router.get('/:id', obtenerCorredorPorId);
router.post('/', registrarCorredor);

export default router;