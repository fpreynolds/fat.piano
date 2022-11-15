const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    tracker: [Tracker]
    history: [History]
  }

  type Tracker {
    _id: ID!
    personal: Int
    social: Int
    sleep: Int
    eats: Int
    exercise: Int
    general: Int
    honest: Int
    createdAt: Date
  }

  type: History {
    _id: ID!
    personalHistory: Array
    socialHistory: Array
    sleepHistory: Array
    eatsHistory: Array
    exerciseHistory: Array
    generalHistory: Array
    honestHistory: Array
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
