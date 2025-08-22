import express from "express";
import morgan from "morgan";
import { Server } from "socket.io";
import { createServer } from 'node:http'

const app = express();
const port = process.env.PORT || 3000;

const server = createServer(app);
const io = new Server(server);


io.on("connection", (socket) => {
    console.log("un usuario se ha conectado")


    socket.on("chat message", (msg) => {
        console.log(msg);
        //socket.send("adios" , "os quiero"); // mamdo el mensaje a quien me lo envio
        io.emit("Hola corazon" , "holaaaaa"); // le mando el mensaje a todos los conectados
    });

});

console.clear();

app.use(express.json());
app.use(morgan('dev'))
app.get("/", (req, res) => {
    return res.status(200).sendFile(process.cwd() + "/client/chat.html");
})

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});