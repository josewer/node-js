
import { validarParcialPelicula, validarPelicula } from "../schemas/movieSchema.js";

export class MovieController {

    constructor({moviesModel}) {
        this.moviesModel = moviesModel;
    }

    getAll = async (req, res) => {
        const queryParams = req.query;
        const movies = await this.moviesModel.getAll(queryParams);
        return res.status(200).json(movies);
    }

    getById = async (req, res) => {

        const id = req.params.id;
        const movie = await this.moviesModel.getById({ id })

        if (movie) { return res.status(200).json(movie); }
        else { return res.status(404).json({ error: "Pelicula no encontrada" }); }
    }


    post = async (req, res) => {

        const body = req.body;
        const result = validarPelicula(body);

        if (!result.success) { return res.status(400).json(JSON.parse(result.error.message)); }

        const newMovie = await this.moviesModel.post({ input: result.data })
        return res.status(201).json(newMovie);
    }


    delete = async (req, res) => {
        const id = req.params.id;

        let deleted = await this.moviesModel.delete({ id });

        if (!deleted) { return res.status(404).json({ error: "Pelicula no encontrada" }); }
        else { return res.status(204).end(); }
    }

    put = async (req, res) => {

        const id = req.params.id;
        const body = req.body;

        const result = validarPelicula(body);

        if (!result.success) { return res.status(400).json(JSON.parse(result.error.message)); }

        const updateMovie = await this.moviesModel.put({ id, input: result.data });

        if (!updateMovie) { return res.status(404).json({ error: "Pelicula no encontrada" }); }

        return res.status(200).json(updateMovie);
    }


    patch = async (req, res) => {

        const body = req.body;
        const id = req.params.id;

        const result = validarParcialPelicula(body);

        if (!result.success) { return res.status(400).json(JSON.parse(result.error.message)); }

        const updateMovie = await this.moviesModel.patch({ id, input: result.data });

        if (!updateMovie) { return res.status(404).json({ error: "Pelicula no encontrada" }); }

        return res.status(200).json(updateMovie);
    }
}
