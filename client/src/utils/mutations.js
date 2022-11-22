import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_KEY = gql`
  mutation addKey($username: String!, $key: String!, $timestamp: String!) {
    addKey(username: $username, key: $key, timestamp: $timestamp) {
      token
      Key {
        _id
        userId
        rating
        timestamp
      }
    }
  }
`;

export const ADD_TRACKER = gql`
  mutation addTracker($theme: String!) {
    addTracker(theme: $theme) {
      theme
    }
  }
`;
