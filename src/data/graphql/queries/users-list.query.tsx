import { gql } from "@apollo/client";

export const UsersListQuery = gql`
  query UsersListQuery($limit: Int!, $offset: Int!) {
    users(pageInfo: { limit: $limit, offset: $offset }) {
      nodes {
        id
        name
        email
      }
      count
    }
  }
`;
