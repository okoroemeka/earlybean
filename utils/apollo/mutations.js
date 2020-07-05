import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation SignUp(
    $firstName: String
    $lastName: String
    $email: String
    $phone: String
    $accountType: String
    $password: String
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
      accountType: $accountType
      password: $password
    ) {
      firstName
      token
      isVerified
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      firstName
      lastName
      email
      phone
      accountType
      token
      isVerified
    }
  }
`;
