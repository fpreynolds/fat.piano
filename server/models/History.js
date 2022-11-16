const { Schema, model } = require("mongoose");

const historySchema = new Schema(
  {
    moodHistory: {
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
