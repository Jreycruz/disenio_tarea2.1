import { z } from 'zod';

export const corredorSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es obligatorio"
  }),

  edad: z.number({
    required_error: "La edad es obligatoria"
  }).min(18, "Debe ser mayor de edad"),

  categoria: z.enum(["Libre", "Master", "Veterano"], {
    errorMap: () => ({
      message: "La categoría debe ser: Libre, Master o Veterano"
    })
  }),

  tiempoObjetivoMinutos: z.number({
    required_error: "El tiempo es obligatorio"
  }).positive("Debe ser mayor a 0")
});