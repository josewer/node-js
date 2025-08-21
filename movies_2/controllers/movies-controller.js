
import { validarParcialPelicula, validarPelicula } from "../schemas/movieSchema.js";
import { MovieModel } from "../model/movie.js";

export class MovieController {

    static async getAll(req, res) {
        const queryParams = req.query;
        const movies = await MovieModel.getAll(queryParams);
        return res.status(200).json(movies);
    }

    static async getById(req, res) {

        const id = req.params.id;
        const movie = await MovieModel.getById({ id })

        if (movie) { return res.status(200).json(movie); }
        else { return res.status(404).json({ error: "Pelicula no encontrada" }); }
    }


    static async post(req, res) {

        const body = req.body;
        const result = validarPelicula(body);

        if (!result.success) { return res.status(400).json(JSON.parse(result.error.message)); }

        const newMovie = await MovieModel.post({ input: result.data })
        return res.status(201).json(newMovie);
    }


    static async delete(req, res) {
        const id = req.params.id;

        let deleted = await MovieModel.delete({ id });

        if (!deleted) { return res.status(404).json({ error: "Pelicula no encontrada" }); }
        else { return res.status(204).end(); }
    }

    static async put(req, res) {

        const id = req.params.id;
        const body = req.body;

        const result = validarPelicula(body);

        if (!result.success) { return res.status(400).json(JSON.parse(result.error.message)); }

        const updateMovie = await MovieModel.put({ id, input: result.data });

        if (!updateMovie) { return res.status(404).json({ error: "Pelicula no encontrada" }); }

        return res.status(200).json(updateMovie);
    }



    static async patch(req, res) {

        const body = req.body;
        const id = req.params.id;

        const result = validarParcialPelicula(body);

        if (!result.success) { return res.status(400).json(JSON.parse(result.error.message)); }

        const updateMovie = await MovieModel.patch({ id, input: result.data });

        if (!updateMovie) { return res.status(404).json({ error: "Pelicula no encontrada" }); }

        return res.status(200).json(updateMovie);
    }
}
