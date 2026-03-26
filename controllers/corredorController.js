import corredores from '../data/corredores.js';

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