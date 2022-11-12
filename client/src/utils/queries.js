import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    {
        user {
            _id
            username
            email
            personal
            social
            sleep
            eats
            exercise
            general
            honest
            history {
                _id
                personal-history
                social-history
                sleep-history
                eats-history
                exercise-history
                general-history
                honest-history
            }
        }
    }
`;
