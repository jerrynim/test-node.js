import server from "../src/wsServer";
import io from "socket.io-client";
describe("wsServer test", () => {
  before(() => {
    console.log("wsStart");
  });
  it("unit test", () => {
    const socket = io.connect("http://localhost:5000"); //socket에 연결
    socket.on("connection", () => {
      console.log("client connected");
    });
    setTimeout(() => socket.emit("message", "sibl"), 3000);
    socket.on("message", (data) => {
      console.log("take message");
      console.log(data);
    });
    socket.on("good", () => {
      console.log("good");
    });
    // socket.on("event", function(data) {});
    // socket.on("disconnect", function() {});
  });
  after(() => {
    server.close();
  });
});
