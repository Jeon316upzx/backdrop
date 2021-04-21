const { gql } = require("apollo-server");

module.exports = gql`
  type Url {
    id: ID!
    full_url: String!
    hashed_url: String!
  }

  type Query {
    urls: [Url]
  }

  input shortenURLInput {
    full_url: String!
  }

  input FindUrlInput {
    hashed_url: String!
  }

  type Mutation {
    shortenURL(input: shortenURLInput!): Url!
    findUrl(input: FindUrlInput!): Url!
  }
`;
