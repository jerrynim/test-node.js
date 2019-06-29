import express from "express";

const PORT = process.env.PORT || 4000;

const app: express.Application = express();

export const action = (req, res) => {
  res.json("Hi");
};

app.get("/", (req, res) => {
  res.json("Hi");
});

app.listen(4000, function() {
  console.log(`Server running on http://localhost:${PORT}`);
});
