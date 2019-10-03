const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("env", path.resolve(__dirname, ".env.js"));
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/theme/card-list.scss";`
      }
    }
  }
};
