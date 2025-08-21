import z from "zod"

const movieSchema = z.object({
  titulo: z.string().min(1, "El título es obligatorio"),
  director: z.string().min(1, "El director es obligatorio"),
  año: z.number().int().gte(1888, "Año inválido"),
  url_imagen: z.string().url("Debe ser una URL válida"),
  descripcion: z.string().min(1, "La descripción es obligatoria"),
  puntuacion: z.number().min(0).max(10),
  duracion: z.number().positive("La duración debe ser positiva"),
  genero: z.array(z.string()).min(1, "Debe tener al menos un género")
});

export function validarPelicula (object) {
    return movieSchema.safeParse(object)
}

export function validarParcialPelicula (object) {
    return movieSchema.partial().safeParse(object)
}
