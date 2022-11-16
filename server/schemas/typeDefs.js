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
    mood: Int
    createdAt: Date
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
