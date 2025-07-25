const path = require('path');

module.exports = {
  // Other configurations...
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert"),
      "url": require.resolve("url"),
      "zlib": require.resolve("browserify-zlib"),
      "util": require.resolve("util")
    }
  }
};
