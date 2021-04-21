const mutation = require("./mutations");
const queries = require("./queries");

module.exports = {
  Mutation: {
    ...mutation,
  },

  Query: {
    ...queries,
  },
};
