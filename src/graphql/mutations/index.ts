import { gql } from "@apollo/client";

export const login = gql`
  mutation Login($data: UserLoginInput!) {
    login(data: $data) {
      message
      token
    }
  }
`;
