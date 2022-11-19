const { User, Tracker, Key, Theme } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "trackers.keys",
          populate: "theme",
        });

        user.trackers.sort((a, b) => b.createdAt - a.createdAt);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    tracker: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "trackers.keys",
          populate: "theme",
        });

        return user.trackers.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    key: async (parent, { _id }) => {
      return await Key.findById(_id).populate("theme");
    },
    keys: async (parent, { theme }) => {
      const params = {};

      if (theme) {
        params.theme = theme;
      }
      return await Key.find(params).populate("theme");
    },
    themes: async () => {
      return await Theme.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Username or Password Invalid");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Username or Password Invalid");
      }

      const token = signToken(user);
      return { token, user };
    },
    addTracker: async (parent, { keys }, context) => {
      console.log(context);
      if (context.user) {
        const tracker = new Tracker({ keys });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { trackers: tracker },
        });

        return tracker;
      }
      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },
    // updateKey: async (parent, { _id, rating }) => {
    //   // key to be updated based on rating system,
    //   //this mutation could possibly be deleted
    // },
  },
};

module.exports = resolvers;
