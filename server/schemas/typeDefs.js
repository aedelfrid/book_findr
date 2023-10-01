const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me(userID: ID!): User
    }

    input bookInput {
        authors: [String]
        description: String!
        title: String!
        bookID: String!
        image: String
        link: String
    }

    input userInput {
        username: String! 
        email: String! 
        password: String!
    }

    type Mutation {
        login(email: String!, password: String!)!: Auth
        addUser(userData: userInput)!: Auth
        saveBook(book: bookInput!)!: User
        removeBook(bookID: String!)!: User
    }

    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: bookCount
        savedBooks [Book]
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
`

module.exports = typeDefs