const mongoose = require("mongoose");
const { Schema } = mongoose;
const trackerSchema = new Schema({
  theme: {
    type: String,
  },
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
