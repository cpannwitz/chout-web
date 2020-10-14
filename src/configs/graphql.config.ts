import { ApolloClientOptions, NormalizedCacheObject } from '@apollo/client'
import { envConfig } from './env.config'

export function graphqlConfig(
  graphqlOptions: Partial<ApolloClientOptions<NormalizedCacheObject>> = {}
): Partial<ApolloClientOptions<NormalizedCacheObject>> {
  return {
    // Provide some optional constructor fields
    name: envConfig.name,
    version: envConfig.version,
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'ignore'
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      }
    },
    ...graphqlOptions
  }
}
