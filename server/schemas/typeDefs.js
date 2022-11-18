const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    
  }

  type Tracker {
    _id: ID!
    mood: Int
    diet: Int
    sleep: Int
    exercise: Int
    timeManagement: Int
    createdAt: Date
    userId
  }

  type: History {
    _id: ID!
    moodHistory: Array
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
