const mongoose = require("mongoose");

var KakalotSchema = mongoose.Schema({
  Name: String,
  Age: Number,
  Email: String,
  Image: String,
});

var kakalotModel = mongoose.model("kakalot", KakalotSchema, "kakalot");

module.exports = kakalotModel;
