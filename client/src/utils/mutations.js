import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
                email
                password
            }
        }
    }`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                password
            }
        }
    }`;

export const ADD_MOOD = gql`
    mutation addMood($userId: String!, $mood: Int!) {
        addMood(userId: $userId, mood: $mood) {
            _id
            mood
        }
    }`;
