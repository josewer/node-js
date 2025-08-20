const express = require("express");
const crypto = require("crypto");
const app = express();
const movies = require("./peliculas.json");
const { validarPelicula, validarParcialPelicula } = require("./schemas/movieSchema.js");
const cors = require("cors");


const port = process.env.PORT || 3000;

app.disable("X-powared-by");

app.use(express.json());

// Lo deja todo a *
// app.use(cors()); 

// me creo un midleware para controlar el tema del cors
app.use((req, res, next) => {
    const CORS_VALIDOS = [
        "http://localhost:8080",
        "http://localhost:8081"
    ]

    const origin = req.header("origin");

    if (CORS_VALIDOS.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Methods", "GET , POST, PUT , PATCH , DELETE");
    }

    next();

});

app.get("/movies", (req, res) => {

    const queryParams = req.query;

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

    res.status(200).json(filterMovies);
});

app.get("/movies/:id", (req, res) => {

    const id = req.params.id;
    const movie = movies.find(f => f.id === id);

    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(400).json("<h1>Pelicula no encontrada</h1>");
    }
});


app.post("/movies", (req, res) => {

    const body = req.body;

    const result = validarPelicula(body);

    if (!result.success) {
        return res.status(400).json(JSON.parse(result.error.message));
    }

    const newMovie = {
        id: crypto.randomUUID(),
        ...result.data
    }

    movies.push(newMovie);
    return res.status(201).json(newMovie);
});


app.delete("/movies/:id", (req, res) => {

    const id = req.params.id;

    const index = movies.findIndex(f => f.id === id);
    console.log("borrar")

    if (index === -1) {
        return res.status(404).send("<h1>Pelicula no encontrada</h1>");
    }

    const movie = movies.splice(index, 1);

    console.log(movie);

    return res.status(204).end();
});

app.put("/movies/:id", (req, res) => {

    const id = req.params.id;

    const index = movies.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).send("<h1>Pelicula no encontrada</h1>");
    }

    const body = req.body;

    const result = validarPelicula(body);

    if (!result.success) {
        return res.status(400).json(JSON.parse(result.error.message));
    }

    const updateMovie = {
        id,
        ...result.data
    }

    movies[index] = updateMovie
    return res.status(200).json(updateMovie);
});

app.options("/movies/:id", (req, res) => {
    //res.setHeader("Access-Control-Allow-Origin" , "*");
    //res.setHeader("Access-Control-Allow-Methods" , "GET , POST, PUT , PATCH , DELETE");

    res.send(200);
})


app.patch("/movies/:id", (req, res) => {

    const body = req.body;
    const id = req.params.id;

    const result = validarParcialPelicula(body);

    if (!result.success) {
        return res.status(400).json(JSON.parse(result.error.message));
    }

    const index = movies.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).end("<h1>Pelicula no encontrada</h1>");
    }

    const updateMovie = {
        ...movies[index],
        ...result.data
    }

    movies[index] = updateMovie;

    return res.status(201).json(updateMovie);


});

app.use((req, res) => {
    res.status(200).end("<h1>Pagina no encontrada</h1>")
});

app.listen(port, () => {
    console.log(`Applicacion UP: http://localhost:${port}`);
});
