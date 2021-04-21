const validator = require("../../helpers/is_valid_url");
const HTTP = require("../../constants/constants");
const { ApolloError } = require("apollo-server-errors");

module.exports = async (_, { input }, { models }) => {
  /**
   * make sure the url is valid eg https://www.example.com/absxdj
   */
  const result = validator(input.hashed_url);

  if (result === false) {
    throw new ApolloError("Invalid URL", HTTP.INVALID_REQUEST);
  }

  /**
   * create a URL object and get the path
   */
  valid_url = new URL(input.hashed_url);

  console.log(valid_url.pathname.split("/"));
  // console.log("sliced");

  /**
   * remove / from path name
   *  and find full_url of hash
   */
  let hash = valid_url.pathname.split("/")[1];

  let foundurl = await models.UrlModel.findOne({
    hashed_url: hash,
  });

  /**
   * if found then return item
   */
  if (!foundurl) {
    throw new ApolloError("URL NOT FOUND", HTTP.NOT_FOUND);
  }
  return foundurl;
};
