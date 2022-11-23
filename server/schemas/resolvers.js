const { User, Tracker, Key } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "trackers",
          populate: "keys",
        });

        user.trackers.sort((a, b) => b.timestamp - a.timestamp);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    tracker: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate("keys");

        return user.trackers.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },

    //! on of these 'key' should work hopefully maybe
    key: async (parent, { _id }, context) => {
      if (context.tracker) {
        const tracker = await Tracker.findById(context.tracker._id);

        return tracker.keys.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },

    // key: async (parent, { _id }) => {
    //   return await Key.findById(_id);
    // },
    keys: async () => {
      return await Key.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Email or Password Invalid");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Email or Password Invalid");
      }

      const token = signToken(user);
      return { token, user };
    },
    addTracker: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const tracker = await Tracker.create(args);

        await User.findByIdAndUpdate(context.user._id, {
          $push: { trackers: tracker },
        });

        return tracker;
      }
      throw new AuthenticationError("this one");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },
    //!TODO: figure this out hopefully maybe
    // updateKey: async (parent, { _id }) => {
    //   // key to be updated based on rating system,
    //   //this mutation could possibly be deleted
    // },
  },
};

module.exports = resolvers;
