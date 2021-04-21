module.exports = async (_, {}, { models }) => {
  return await models.UrlModel.find({});
};
