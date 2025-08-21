import movies from "../../../peliculas.json" with {type: "json"};

//import { readJson } from "../utils.js";
//const movies = readJson("../peliculas.json");

export class MovieModel {

    static async getAll(queryParams) {

        let filterMovies = [...movies];

        for (let [key, value] of Object.entries(queryParams)) {
            filterMovies = filterMovies.filter(movie => {

                const field = movie[key];

                if (field == null) return false;

                if (Array.isArray(field)) {
                    return field.some(item => item.toLowerCase() === value.toLowerCase());
                } else {
                    return String(field).toLowerCase() === String(value).toLowerCase();
                }
            });
        }

        return filterMovies;
    }


    static async getById({ id }) {
        const movie = movies.find(f => f.id === id);
        return movie;
    }


    static async delete({ id }) {
        const index = movies.findIndex(f => f.id === id);

        if (index === -1) { return false; }

        movies.splice(index, 1);

        return true;
    }


    static async put({ id, input }) {

        const index = movies.findIndex(f => f.id === id);

        if (index === -1) { return false; }

        const updateMovie = {
            id,
            ...input
        }

        movies[index] = updateMovie

        return updateMovie;
    }


    static async patch({ id, input }) {

        const index = movies.findIndex(f => f.id === id);

        if (index === -1) { return false; }

        console.log(movies[index]);

        const updateMovie = {
            ...movies[index],
            ...input
        }

        console.log(updateMovie);

        movies[index] = updateMovie;

        return updateMovie;
    }


    static async post({ input }) {

        const newMovie = {
            id: crypto.randomUUID(),
            ...input
        }

        movies.push(newMovie);
        return newMovie;
    }
}