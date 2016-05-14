var webpack = require('webpack');

module.exports = {
  entry: ['./src/main.js'],
  output: { path: __dirname, filename: 'bundle.js' },
  devServer: {
    inline: true,
    port: 8080,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'react'],
      },
    }],
  },
};
