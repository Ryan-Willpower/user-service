import { gql } from 'apollo-server'

export default gql`
  type User {
    userid: String!
    username: String
    passwd: String
  }

  extend type Query {
    Users: [User]!
  }
`
