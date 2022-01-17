import { gql } from '@apollo/client';

export const AddUserMutation = gql`
  mutation AddUserMutation($data: UserInputType!) {
    createUser(data: $data) {
      id
    }
  }
`;
