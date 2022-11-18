import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
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

export const ADD_MOOD = gql`
  mutation addMood($username: String!, $mood: String, $rating: Int) {
    addMood(username: $username, mood: $mood, rating: $rating) {
      _id
      mood
      rating
    }
  }
`;
