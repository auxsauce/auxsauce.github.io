// const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// module.exports = {
//   optimization: {
//     minimizer: [new UglifyJsPlugin()],
//   },
// };
module.exports = {
  entry: `${__dirname}/src/index.js`,
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },

  plugins: process.argv.indexOf('-p') === -1 ? [] : [
    
    // new UglifyJsPlugin({
    //   output: {
    //     comments: false,
    //   },
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false,
    //   },
    // }),
  ],
};
