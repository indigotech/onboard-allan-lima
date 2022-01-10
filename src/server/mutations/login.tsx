import { gql } from "@apollo/client";

const LoginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export default LoginMutation;