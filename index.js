import express from 'express';
import dotenv from 'dotenv';
import corredorRoutes from './routes/corredorRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/corredores', corredorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});