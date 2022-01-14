import { gql } from '@apollo/client';

export const UsersListQuery = gql`
  query UsersListQuery {
    users(pageInfo: {}) {
        nodes {
          id
          name
          email
        }
        count
      }
  }
`;
