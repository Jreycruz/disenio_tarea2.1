import express from 'express';
import { obtenerCorredores } from '../controllers/corredorController.js';

const router = express.Router();

router.get('/', obtenerCorredores);

export default router;