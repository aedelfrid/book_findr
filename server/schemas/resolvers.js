const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },
    Mutation: {
        login: async (email, password) => {
            // return auth?
        },
        addUser: async (userData) => {
            // return auth?
            const user = await User.create({userData});

            if (!user) {
                return res.status(400).json({ message: 'Something is wrong!' });
            };
            const token = signToken(user)
            return { token, user }
        },
        saveBook: async ({ book }, context) => {
            return User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { book } },
                { new: true, runValidators: true }
            )
        },
        removeBook: async (bookID, context) => {
            return User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookID: bookID } } },
                { new: true }
            );
        }
    }
}