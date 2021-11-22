// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
       _id: ID
       username: String
       email: String
       bookCount: Int
       savedBooks: Int
    }
    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }





`;

// export the typeDefs
module.exports = typeDefs;