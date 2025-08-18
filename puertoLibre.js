const net = require('node:net');

function buscarPuertoDisponible(puertoDeseado = 0) {
    return new Promise((resolve, reject) => {
        const server = net.createServer();

        server.listen(puertoDeseado, () => {
            const { port } = server.address();
            server.close(() => resolve(port));
        });

        server.on("error", (err) => {
            if (err.code === "EADDRINUSE") {
                // Si el puerto está en uso, probar con 0 (puerto aleatorio)
                buscarPuertoDisponible(0).then(resolve).catch(reject);
            } else {
                reject(err);
            }
        });
    });
}

// Ejemplo de uso:
buscarPuertoDisponible(3000)
    .then(puerto => console.log("Puerto disponible:", puerto))
    .catch(err => console.error(err));

module.exports = buscarPuertoDisponible;
