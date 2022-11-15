const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const trackerSchema = new Schema(
  {
    personal: {
      type: Number,
      min: 0,
      max: 5,
    },
    social: {
      type: Number,
      min: 0,
      max: 5,
    },
    sleep: {
      type: Number,
      min: 0,
      max: 5,
    },
    eats: {
      type: Number,
      min: 0,
      max: 5,
    },
    exercise: {
      type: Number,
      min: 0,
      max: 5,
    },
    general: {
      type: Number,
      min: 0,
      max: 5,
    },
    honest: {
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
