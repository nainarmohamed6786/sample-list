const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("This is a backend check");
});

app.listen("6547", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Port connected successfully");
});
