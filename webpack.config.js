// eslint-disable-next-line no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      // eslint-disable-next-line no-undef
      "path": require.resolve("path-browserify")
    }
  }
};