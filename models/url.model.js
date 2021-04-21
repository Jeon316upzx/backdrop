const mongoose = require("mongoose");
const crypto = require("crypto");
const url = require("url");

/**
 * this is the Url schema with two parameters
 * @param full_url this is the url a user has entered to be shortened
 * @param hashed_url this is the hash generated hashoptions in the pre save hook.
 *
 *
 */
const UrlSchema = new mongoose.Schema(
  {
    full_url: {
      type: String,
      required: true,
    },

    hashed_url: {
      type: String,
    },
  },
  { timestamps: true }
);

UrlSchema.pre("save", async function save(next) {
  /**
   * Generate random hash for the hashed url
   * this is one of the many ways of generating random string, others aplenty
   */
  try {
    let hash = "";
    let hashOptions =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++) {
      hash += hashOptions.charAt(
        Math.floor(Math.random() * hashOptions.length)
      );
    }

    this.hashed_url = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

const UrlModel = mongoose.model("urls", UrlSchema);

module.exports = UrlModel;
