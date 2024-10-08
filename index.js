const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pokeModel = require("./models/poke");
const app = express();

app.use(express.json());

// URL  for database
mongoose.connect(
  "mongodb+srv://abhayanshmishra1371:mishraji1371@abhayproject.qjacr1a.mongodb.net/phoenix"
);

// GET ALL USER DATA
app.get("/", (req, res) => {
  res.send("hi its me Bhuvnesh Verma (Bhuvnesh)");
});
app.get("/pokemon", (req, res) => {
  pokeModel
    .find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// RUN THE SERVER
app.listen(3001, () => {
  console.log("server is Running");
});
