import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      trackers {
        _id
        createdAt
        keys {
          _id
          rating
        }
      }
    }
  }
`;

export const QUERY_KEYS = gql`
  query getKeys($theme: ID) {
    keys(theme: $theme) {
      _id
      rating
      theme {
        _id
      }
    }
  }
`;

export const QUERY_ALL_KEYS = gql`
  {
    keys {
      _id
      rating
      theme {
        name
      }
    }
  }
`;

export const QUERY_THEMES = gql`
  {
    themes {
      _id
      name
    }
  }
`;
