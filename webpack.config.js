const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
}