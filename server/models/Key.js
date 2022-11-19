const mongoose = require("mongoose");

const { Schema } = mongoose;

const keySchema = new Schema({
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  theme: {
    type: Schema.Types.ObjectId,
    ref: "Theme",
    required: true,
  },
});

const Key = mongoose.model("Key", keySchema);

module.exports = Key;
