const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    trackers: [Tracker]
  }

  type Tracker {
    _id: ID!
    theme: String
  }

  type Key {
    _id: ID!
    rating: Int
    timestamp: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    tracker(_id: ID!): Tracker
    key(_id: ID!): Key
    keys: [Key]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTracker(theme: String!): Tracker
    updateUser(username: String, email: String, password: String): User
    addKey(username: String!, key: String!, timestamp: String!): Key
  }
`;
// mutation for updateKey possible for completed project, setup resolver first...?
module.exports = typeDefs;
