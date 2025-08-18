// servicio creado con los modulos nativos de node.js

const http = require("node:http")
const fs = require("node:fs");

console.clear();

const port = process.env.PORT ?? 3000;

const routes = {
    GET: {
        "/": (_, response) => {
            response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            response.end("Esta es la web de inicio");
        },
        "/contacto": (_, response) => {
            response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            response.end("Esta es la web del contacto");
        }, "/imagen": (_, response) => {

            fs.readFile('./lillo.jpg', (error, data) => {
                if (error) {
                    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    response.end("Ocurrio un error al leer la imagen");
                } else {
                    response.writeHead(200, { "Content-Type": "image/jpeg" });
                    response.end(data);
                }
            });
        }
    },
    POST: {
        "/create": (request, response) => {
            let body = "";

            request.on("data", (chunk) => (body += chunk));
            request.on("end", () => {
                try {
                    const data = JSON.parse(body);
                    data.hora = 2;
                    response.writeHead(201, { "Content-Type": "application/json" });
                    response.end(JSON.stringify(data));
                } catch {
                    response.writeHead(400, { "Content-Type": "text/plain" });
                    response.end("JSON inválido");
                }
            });
        }
    }
};


const proceso = (request, response) => {

    const methodRouter = routes[request.method];
    const handler = methodRouter?.[request.url];

    if (handler) {
        handler(request, response); // ejecuta la función de la ruta
    } else {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Página no encontrada");
    }
};

const server = http.createServer(proceso);

server.listen(port, () => {
    console.log(`Service up: http://localhost:${server.address().port}`)
});