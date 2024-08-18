// TRANING THE MODEL
const mongoose = require("mongoose");

const pokeSchema = new mongoose.Schema({
  name: String,
  index: Number,
  type: [String],
});
const pokeModel = mongoose.model("pokemon", pokeSchema);
module.exports = pokeModel;
