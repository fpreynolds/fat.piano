const mongoose = require("mongoose");

const { Schema } = mongoose;

const keySchema = new Schema({
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Key = mongoose.model("Key", keySchema);

module.exports = Key;
