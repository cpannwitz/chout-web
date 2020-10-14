import { gql } from 'graphql.macro'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** Date custom scalar type */
  Date: Date
}

/** AuthProvider name */
export enum AuthProvider {
  Facebook = 'FACEBOOK',
  Github = 'GITHUB',
  Google = 'GOOGLE',
  Twitter = 'TWITTER'
}

export type Mutation = {
  __typename?: 'Mutation'
  validateUser?: Maybe<User>
}

export type Query = {
  __typename?: 'Query'
  hello: Scalars['String']
  helloWorld: Scalars['String']
  me: User
}

export type QueryHelloArgs = {
  name: Scalars['String']
}

/** User role */
export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  Organisation = 'ORGANISATION',
  User = 'USER'
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['Date']
  email: Scalars['String']
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  lastSignInTime: Scalars['Date']
  phoneNumber?: Maybe<Scalars['String']>
  provider?: Maybe<AuthProvider>
  role: Role
  updatedAt: Scalars['Date']
  username: Scalars['String']
  verified: Scalars['Boolean']
}

export type ValidateUserMutationVariables = Exact<{ [key: string]: never }>

export type ValidateUserMutation = { __typename?: 'Mutation' } & {
  validateUser?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      | 'createdAt'
      | 'updatedAt'
      | 'lastSignInTime'
      | 'provider'
      | 'verified'
      | 'role'
      | 'id'
      | 'email'
      | 'username'
      | 'image'
      | 'phoneNumber'
    >
  >
}

export const ValidateUserDocument = /*#__PURE__*/ gql`
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
export type ValidateUserMutationFn = Apollo.MutationFunction<
  ValidateUserMutation,
  ValidateUserMutationVariables
>

/**
 * __useValidateUserMutation__
 *
 * To run a mutation, you first call `useValidateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateUserMutation, { data, loading, error }] = useValidateUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useValidateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<ValidateUserMutation, ValidateUserMutationVariables>
) {
  return Apollo.useMutation<ValidateUserMutation, ValidateUserMutationVariables>(
    ValidateUserDocument,
    baseOptions
  )
}
export type ValidateUserMutationHookResult = ReturnType<typeof useValidateUserMutation>
export type ValidateUserMutationResult = Apollo.MutationResult<ValidateUserMutation>
export type ValidateUserMutationOptions = Apollo.BaseMutationOptions<
  ValidateUserMutation,
  ValidateUserMutationVariables
>
