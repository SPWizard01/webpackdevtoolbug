import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";

const config: webpack.Configuration = {
  mode: "development",
  devtool: "source-map",
  target: "web",
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "js/[name].js?[contenthash]",
    chunkFilename: "js/[name].chunk.js?[contenthash]",
    devtoolNamespace: "MYNAMESPACE",
  },
  entry: {
    app: "./src/app",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    runtimeChunk: "single",
    removeEmptyChunks: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false,
        defaultVendors: false,
        vendors: {
          name: "vendors",
          idHint: "vendors",
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
