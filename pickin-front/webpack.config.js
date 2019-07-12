const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["@babel/polyfill", __dirname + "/src/index.tsx"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "postcss-styled" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      showErrors: true
    }),
    new MiniCssExtractPlugin({
      template: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
