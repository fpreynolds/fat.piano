import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      trackers {
        _id
        theme
        keys {
          _id
          rating
          timestamp
        }
      }
    }
  }
`;

export const QUERY_TRACKERS = gql`
  {
    trackers(key: $key) {
      _id
      theme
  }
`;

export const QUERY_ALL_TRACKERS = gql`
  {
    trackers {
      _id
      theme
    }
  }
`;

export const QUERY_KEYS = gql`
  {
    keys {
      _id
      rating
      timestamp
    }
  }
`;
