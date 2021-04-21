const HTTP = require("../../constants/constants");
const { ApolloError } = require("apollo-server-errors");
const validator = require("../../helpers/is_valid_url");

module.exports = async (_, { input }, { models }) => {
  /**
   *
   * @param input validate the full_url to make sure its a real url
   *
   */
  const result = validator(input.full_url);

  if (result === false) {
    throw new ApolloError("Invalid URL", HTTP.INVALID_REQUEST);
  }

  newUrl = await models.UrlModel.create(input);
  return newUrl;
};
