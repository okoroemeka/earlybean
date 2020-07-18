import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation SignUp(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phone: String!
    $accountType: String
    $password: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
      accountType: $accountType
      password: $password
    ) {
      firstName
      isVerified
      phone
      email
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

export const VERIFY_CODE_MUTATION = gql`
  mutation verifyUser($verificationCode: String!) {
    verifyUser(verificationCode: $verificationCode)
  }
`;
export const RESEND_VERIFY_CODE_MUTATION = gql`
  mutation resendVerificationCode($phone: String!) {
    resendVerificationCode(phone: $phone)
  }
`;
