const express = require("express");
const app = express();

const port = process.env.PORT ?? 3000;

app.disable('x-powered-by')

app.get( '/:name' , (req , res) => {
    res.send(`<h1>Hola ${req.params.name}`);
});


app.use( (req , res) => {
    res.status(404).send("<h1>Pagina no encontrada</h1>")
});

app.listen(port , () => {
    console.log(`App up: http://localhost:${port}`)
});