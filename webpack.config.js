module.exports = {
  node: {
    console: false,
    global: true,
    process: true,
    __filename: "mock",
    __dirname: "mock",
    Buffer: true,
    setImmediate: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
