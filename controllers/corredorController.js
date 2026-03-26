import corredores from '../data/corredores.js';
import { corredorSchema } from '../schemas/corredorSchema.js';

export const obtenerCorredores = (req, res) => {
  const { categoria } = req.query;

  if (categoria) {
    const filtrados = corredores.filter(
      (c) => c.categoria.toLowerCase() === categoria.toLowerCase()
    );
    return res.json(filtrados);
  }

  res.json(corredores);
};

export const obtenerCorredorPorId = (req, res) => {
  const id = parseInt(req.params.id);

  const corredor = corredores.find(c => c.id === id);

  if (!corredor) {
    return res.status(404).json({
      mensaje: 'Corredor no encontrado'
    });
  }

  res.json(corredor);
};

export const registrarCorredor = (req, res) => {
  const resultado = corredorSchema.safeParse(req.body);

  if (!resultado.success) {
    return res.status(400).json({
      errores: resultado.error.issues
    });
  }

  const nuevoCorredor = {
    id: corredores.length + 1,
    ...resultado.data
  };

  corredores.push(nuevoCorredor);

  res.status(201).json(nuevoCorredor);
};