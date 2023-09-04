const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/challenge_4/'
    : '/',
  transpileDependencies: true,
});
