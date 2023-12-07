import express from "express";
import { Server as SocketServer } from "socket.io";
import http from "http";


const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);
// const io = new SocketServer(server, {
//     cors: {
//         origin: "http://localhost:5173",
//     }
// });

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("message", (msg) => {
        console.log("message: " + msg);
    })

    socket.emit("message", "world")

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });


});


app.get("/", (req, res) => {
    res.send("Hello World");
})

server.listen(3000, () => {
    console.log("Server running on port 3000");
});