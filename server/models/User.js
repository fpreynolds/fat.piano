const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const historySchema = require("./History");

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
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
    history: [historySchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
