import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { graphqlConfig } from '../configs/graphql.config'
import { envConfig } from '../configs/env.config'

const httpLink = createHttpLink({
  uri: envConfig.server.gql
})

const config = graphqlConfig()
export const graphqlClient = new ApolloClient({
  ...config,
  link: httpLink,
  cache: new InMemoryCache()
})
