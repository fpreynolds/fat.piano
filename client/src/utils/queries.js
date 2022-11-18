import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      tracker {
        _id
        mood
        rating
        createdAt
      }
      history {
        _id
        moodHistory
      }
    }
  }
`;
