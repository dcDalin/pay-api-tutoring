const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello Change");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
