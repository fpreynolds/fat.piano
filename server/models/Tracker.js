const { Schema, model } = require("mongoose");

const trackerSchema = new Schema(
  {
    personal: {
      type: Boolean,
    },
    social: {
      type: Boolean,
    },
    sleep: {
      type: Boolean,
    },
    eats: {
      type: Boolean,
    },
    exercise: {
      type: Boolean,
    },
    general: {
      type: Boolean,
    },
    honest: {
      type: Boolean,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = trackerSchema;
