const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("env", path.resolve(__dirname, ".env.js"));
  }
};
