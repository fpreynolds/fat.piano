const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const trackerSchema = new Schema(
  {
    mood: {
      type: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = trackerSchema;
