const mongoose = require("mongoose");
const { Schema } = mongoose;
const trackerSchema = new Schema({
  theme: {
    type: String,
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
