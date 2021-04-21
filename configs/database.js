const mongoose = require("mongoose");
const config = require("../configs/config");
const logger = require("../logger/logger");

const db = mongoose
  .connect(config.MONGO_URL, config.MONGODB_OPTIONS)
  .then(() => {
    logger.info(`Database Connected 🚀`);
  })
  .catch((error) => {
    logger.error(`${error} 😱`);
  });

module.exports = db;
