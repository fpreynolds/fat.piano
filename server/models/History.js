const { Schema, model } = require("mongoose");

const historySchema = new Schema(
  {
    personalHistory: {
      type: Array,
    },
    socialHistory: {
      type: Array,
    },
    sleepHistory: {
      type: Array,
    },
    eatsHistory: {
      type: Array,
    },
    exerciseHistory: {
      type: Array,
    },
    generalHistory: {
      type: Array,
    },
    honestHistory: {
      type: Array,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
module.exports = historySchema;
