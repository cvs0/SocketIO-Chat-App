import express from 'express';
import http from 'http';
import {Server} from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {cors: {origin: "http://localhost:3000"}});

io.on("connection", (socket) => {
    console.log("client connected.");
})

server.listen(5000, () => console.log("Server started on port 5000."));