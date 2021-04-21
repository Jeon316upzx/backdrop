require("dotenv").config();

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const MONGODB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  keepAlive: true,
  poolSize: 50,
  autoIndex: false,
  retryWrites: false,
};

const config = {
  SERVER_PORT: SERVER_PORT,
  MONGO_URL: MONGO_URL,
  MONGODB_OPTIONS: MONGODB_OPTIONS,
};

module.exports = config;
