import express from "express";
import { createRouter } from "./routers/movies-router.js";


export const createApp = ( { moviesModel } ) => {

    const port = process.env.PORT || 3000;
    const app = express();

    app.disable("x-powered-by")
    app.use(express.json());

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

    app.use("/movies", createRouter({moviesModel}));

    app.use((req, res) => { res.status(200).end("<h1>Pagina no encontrada</h1>") });
    app.listen(port, () => { console.log(`Applicacion UP: http://localhost:${port}`); });
}
