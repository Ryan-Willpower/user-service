import { ApolloServer } from 'apollo-server'

import { typeDefs } from './graphql/typeDefs'
import { resolvers } from './graphql/resolvers'

export function server(): ApolloServer {
  const app = new ApolloServer({ typeDefs, resolvers })

  return app
}
