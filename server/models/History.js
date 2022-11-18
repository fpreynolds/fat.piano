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



trackers {
  datapoints (
    mood: 1
    sleep: 5

  ),
  userId: 1234,
  createdAt: 11/17/22
}