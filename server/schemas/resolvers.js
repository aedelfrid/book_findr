const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async ({ userID }) => {
            return User.findOne({ _id: userID });
        }
    },
    Mutation: {
        login: async (email, password) => {
            // return auth?
        },
        addUser: async (username, email, password) => {
            // return auth?
        },
        saveBook: async ({ user, book }) => {
            return User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { book } },
                { new: true, runValidators: true }
            )
        },
        removeBook: async ({ user }, bookID) => {
            return User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookID: bookID } } },
                { new: true }
              );
        }
    }
}