import "dotenv/config";
import express from "express";

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Is It Working");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
