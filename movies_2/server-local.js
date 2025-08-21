import { createApp } from "./index.js";
import { MovieModel } from "./model/db/local-storage/movie.js";

console.clear();
const moviesModel = new MovieModel();
createApp({moviesModel})
console.log("Data base local-storage")