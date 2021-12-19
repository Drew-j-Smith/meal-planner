module.exports = {
  mode: "development",
  entry: "./index.ts",
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
};