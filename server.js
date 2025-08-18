const http = require('node:http');

console.clear();

const server = http.createServer( ( request , response ) => {
    console.log(`${request.method} ${request.url}`);
    response.end("Hola mundo");
});

server.listen(3000 , () => {
      console.log(`Servidor levantado en http://localhost:${server.address().port}`)
});