// webpack.config.js or webpack.config.ts
const path = require("path")

module.exports = {
  // Your other webpack configuration options...

  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(".webpack-cache"),
    buildDependencies: {
      config: [__filename]
    }
  }
}

