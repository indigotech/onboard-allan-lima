import { gql } from "@apollo/client";

export const UserDetailQuery = gql`
  query UserDetailQuery($id: ID!) {
    user(id: $id) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;
