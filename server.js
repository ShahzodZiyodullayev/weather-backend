const express = require("express");
const app = express();
require("dotenv").config();

app.get("/hello", (req, res) => {
  res.send("Hello Shahzod");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
