const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: './dist',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Match .css files
        use: ['style-loader', 'css-loader'], // Process with these loaders
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Match image file types
        type: 'asset/resource', // Use Webpack's asset modules
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};
