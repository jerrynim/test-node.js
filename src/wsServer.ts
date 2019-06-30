import express from "express";
import { createServer } from "http";
import socketIO from "socket.io";

const PORT = process.env.PORT || 4000;

const app = express();
const server = createServer(app); //http 서버 생성
const wsServer = socketIO(server); // http server를 socket.io server로 upgrade한다
wsServer.on("connection", (socket: any) => {
  console.log(`${socket}connected`);
  socket.on("message", () => {
    console.log("server take mesage");
  });
  socket.emit("message", "foo");
  socket.on("disconnect", () => {
    console.log("user disconnected: " + socket.name);
  });
});

//chat이라는 namespace의 room이라는 채널을 생성
const chat = wsServer.of("/chat").on("connection", (socket: any) => {
  socket.on("chat message", (data: any) => {
    console.log("message from client: ", data);
    var name = (socket.name = data.name);
    var room = (socket.room = data.room);
    // room에 join한다
    socket.join(room);
    // room에 join되어 있는 클라이언트에게 메시지를 전송한다
    chat.to(room).emit("chat message", data.msg);
  });
});

server.listen(5000);
// export the server so it can be easily called for testing
// exports.server = http.listen(port);
export default server;
