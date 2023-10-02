const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookID: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input bookInput {
        bookID: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    input userInput {
        username: String!
        email: String!
        password: String!
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(userData: userInput!): Auth
        saveBook(bookData: bookInput!): User
        removeBook(bookID: String!): User
    }
`

module.exports = typeDefs