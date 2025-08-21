
import db from './db.js'

export class MovieModel {

    async getAll(queryParams) {
        const data = await db.query('SELECT * FROM movies');
        return data.rows;
    }


    async getById({ id }) {
        const query = `SELECT * FROM movies WHERE ID = $1`;
        const values = [id]
        const { rows } = await db.query(query, values);
        return rows;
    }


    async delete({ id }) {
        const query = `DELETE FROM movies WHERE ID = $1 RETURNING *`;
        const values = [id]
        const { rows } = await db.query(query, values);
        return rows.length != 0;
    }


    async put({ id, input }) {
        try {
            const {
                titulo,
                director,
                año,
                url_imagen,
                descripcion,
                puntuacion,
                duracion,
                genero
            } = input;

            const query = `
                  UPDATE movies
                  SET titulo = $1,
                      director = $2,
                      año = $3,
                      url_imagen = $4,
                      descripcion = $5,
                      puntuacion = $6,
                      duracion = $7,
                      genero = $8
                  WHERE id = $9
                  RETURNING *;
                     `;

            const values = [
                titulo,
                director,
                año,
                url_imagen,
                descripcion,
                puntuacion,
                duracion,
                genero,
                id
            ];

            const { rows } = await db.query(query, values);

            // Si no se encontró ninguna fila, devolver false
            if (rows.length === 0) return false;

            return rows[0];
        } catch (err) {
            console.error("Error al actualizar película:", err);
            throw new Error("Error al actualizar película")
        }
    }


    async patch({ id, input }) {
        try {

            const fields = [];
            const values = [];
            let idx = 1;

            for (const [key, value] of Object.entries(input)) {
                fields.push(`${key} = $${idx}`);
                values.push(value);
                idx++;
            }

            console.log(fields)

            if (fields.length === 0) {
                throw new Error("No hay campos para actualizar");
            }

            // Agregamos el id al final
            values.push(id);

            const query = `
                  UPDATE movies
                  SET ${fields.join(", ")}
                  WHERE id = $${idx}
                  RETURNING *;
                `;

            const { rows } = await db.query(query, values);

            if (rows.length === 0) return false; // si no existe el id
            return rows[0];
        } catch (err) {
            console.error("Error al hacer PATCH:", err);
            throw new Error("Error al actualizar película parcialmente");
        }
    }



    async post({ input }) {

        const id = crypto.randomUUID();
        const { titulo, director, año, url_imagen, descripcion, puntuacion, duracion, genero } = input;

        const query = `
            INSERT INTO movies (id, titulo, director, año, url_imagen, descripcion, puntuacion, duracion, genero)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
        `;

        const values = [id, titulo, director, año, url_imagen, descripcion, puntuacion, duracion, genero];
        const { rows } = await db.query(query, values);
        return rows[0]; // la película recién creada
    }
}