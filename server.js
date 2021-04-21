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
const port = process.env.PORT || 3000;
server.listen(port).then(({ url }) => {
  logger.info(`App is listening at ${url} 😋 `);
});

module.exports = server;
