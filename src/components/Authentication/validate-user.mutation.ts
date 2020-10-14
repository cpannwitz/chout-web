import { gql } from 'graphql.macro'

export const validateUserMutation = gql`
  mutation validateUser {
    validateUser {
      createdAt
      updatedAt
      lastSignInTime
      provider
      verified
      role
      id
      email
      username
      image
      phoneNumber
    }
  }
`
