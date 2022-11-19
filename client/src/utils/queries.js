import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      trackers {
        _id
        mood
        diet
        sleep
        exercise
        timeManagement
        createdAt
        userId
      }
    }
  }
`;
