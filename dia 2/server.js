const http = require("node:http")
const fs = require("node:fs");
const { timeStamp } = require("node:console");


console.clear();

const port = process.env.PORT ?? 3000;

const proceso = (request, response) => {

    const url = request.url;
    const method = request.method;

    console.log(url);
    console.log(method);


    if (method === "GET") {
        response.setHeader('Content-type', 'text-plain ; charset=utf-8');

        if (url == '/') {
            response.statusCode = 200;
            response.end("Esta es la web de inicio");
        }
        else if (url == '/contacto') {
            response.statusCode = 200;
            response.end("Esta es la web de contacto");

        } else if (url == '/imagen') {

            fs.readFile('./lillo.jpg', (error, data) => {
                if (error) {
                    response.statusCode = 500;
                    response.end("Ocurrio un error");
                } else {
                    response.statusCode = 200;
                    response.setHeader('Content-type', 'image/jpg');
                    response.end(data);
                }
            });

        } else {
            response.statusCode = 400;
            response.end("Pagina no encontrada");
        }
    } else if (method === "POST") {


        if (url === "create") {
            let body = "";

            request.on("data", (chuck) => {
                body += chuck;
            });

            request.on("end", () => {
                const data = JSON.stringify(body);
                data.timestamp = timeStamp;
                response.statusCode(201);
                response.end(data);
            });
        }
    }
};

const server = http.createServer(proceso);

server.listen(port, () => {
    console.log(`Service up: http://localhost:${server.address().port}`)
});