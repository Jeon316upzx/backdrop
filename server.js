const { ApolloServer, gql } = require("apollo-server");
const databaseConnect = require("./configs/database");
const types = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");
const configurations = require("./configs/config");
const logger = require("./logger/logger");

/**
 * Initialize Database
 */
databaseConnect;

const server = new ApolloServer({
  typeDefs: types,
  resolvers,
  context: { models },
  introspection: true,
  playground: {
    settings: {
      "editor.theme": "light",
    },
  },
});

server.listen({ port: configurations.SERVER_PORT || 4000 }).then(({ url }) => {
  logger.info(`App is listening at ${url} 😋 `);
});

module.exports = server;
