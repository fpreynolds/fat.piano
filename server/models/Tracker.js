const mongoose = require("mongoose");
const { Schema } = mongoose;
const dateFormat = require("../utils/dateFormat");

const trackerSchema = new Schema(
  {
    mood: {
      type: Number,
      min: 0,
      max: 5,
    },
    diet: {
      type: Number,
      min: 0,
      max: 5,
    },
    sleep: {
      type: Number,
      min: 0,
      max: 5,
    },
    exercise: {
      type: Number,
      min: 0,
      max: 5,
    },
    timeManagement: {
      type: Number,
      min: 0,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
