import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                savedBooks {
                    bookID
                    title
                    description
                    image
                }
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($userData: userInput!) {
        addUser(userData: $userData) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookData: bookInput!) {
        saveBook(bookData: $bookData) {
            _id
            username
            savedBooks {
                bookID
                title
                description
                image
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookID: String!) {
        removeBook(bookID: $bookID) {
            _id
            username
            savedBooks {
                bookID
                title
                description
                image
            }
        }
    }
`;