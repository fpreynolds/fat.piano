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

export const ADD_MOOD = gql`
  mutation addMood($username: String!, $mood: String!, $now: Date!) {
    addMood(username: $username, mood: $mood, now: $now) {
      token
      curMood {
        _id
        userId
        mood
        now
      }
    }
  }
`;

export const ADD_TRACKER = gql`
  mutation addTracker($keys: [ID]!) {
    addTracker(keys: $keys) {
      theme
      keys {
        _id
        rating
        timestamp
      }
    }
  }
`;
