import { Router } from "express";
import { MovieController } from "../controllers/movies-controller.js";


export const createRouter = ({ moviesModel }) => {

    const moviesRouter = Router();

    const movieController = new MovieController({moviesModel})

    moviesRouter.get("/", movieController.getAll);
    moviesRouter.get("/:id", movieController.getById);
    moviesRouter.post("/", movieController.post);
    moviesRouter.delete("/:id", movieController.delete);
    moviesRouter.put("/:id", movieController.put);
    moviesRouter.patch("/:id", movieController.patch);

    return moviesRouter;
}
