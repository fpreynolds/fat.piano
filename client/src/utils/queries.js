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
  query getTrackers($key: ID) {
    trackers(key: $key) {
      _id
      rating
      key {
        _id
      }
    }
  }
`;

export const QUERY_ALL_TRACKERS = gql`
  {
    trackers {
      _id
      theme
      keys {
        rating
        timestamp
      }
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
