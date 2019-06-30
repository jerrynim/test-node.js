import express from "express";
import http from "http";

const PORT = process.env.PORT || 4000;

const app: express.Application = express();

export const server = http.createServer(app);

export const action = (req, res) => {
  res.json("Hi");
};

app.get("/", action);

server.listen(4000, function() {
  console.log(`Server running on http://localhost:${PORT}`);
});
