const mongoose = require("mongoose");
const { Schema } = mongoose;
const trackerSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  keys: [
    {
      type: Schema.Types.ObjectId,
      ref: "Key",
    },
  ],
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
