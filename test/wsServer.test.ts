import server from "../src/wsServer";
import io from "socket.io-client";
import { expect } from "chai";
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
    setInterval(() => {
      console.log("repeat");
      socket.emit("message");
      expect(10).to.equal(10);
    }, 2000);
    // socket.on("event", function(data) {});
    // socket.on("disconnect", function() {});
    it("test", () => {
      setInterval(() => {
        console.log("ddd");
      }, 5000);
    });
  });
  after(() => {
    server.close();
    console.log("closed");
  });
});
