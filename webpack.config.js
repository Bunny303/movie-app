
const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");

const BUILD_DIR = path.resolve(__dirname, "./build");
const APP_DIR = path.resolve(__dirname, "./src");

module.exports = env => {
  const isProd = env.prod;

  return {
    mode: isProd ? "production" : "development",
    cache: isProd,
    entry: APP_DIR + "/index.js",
    devtool: isProd ? "cheap-module-eval-source-map" : "source-map",
    output: {
      filename: "bundle.js",
      path: BUILD_DIR,
      publicPath: ""
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          //order is important, start reading from bottom
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => {
                  autoprefixer({
                    "browsers": [
                      "> 1%",
                      "last 2 versions"
                    ]
                  });
                }
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: isProd ? "production" : "development"
        }
      })
    ]
  }
}
