import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";

const config: webpack.Configuration = {
  mode: "development",
  devtool: "source-map",
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "js/[name].js?[contenthash]",
    chunkFilename: "js/[name].chunk.js?[contenthash]",
    devtoolNamespace: "MYNAMESPACE",
    jsonpFunction: "webpackJsonpMYNAMESPACE",
  },
  entry: {
    app: "./src/app",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "all",
          minChunks: 1,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};

export default config;
