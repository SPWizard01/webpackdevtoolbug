import devServer from "webpack-dev-server";
import webpack from "webpack";
import { merge } from "webpack-merge";
import config from "./webpack.config";
import { resolve } from "path";
const serverConfig = merge(config, {
  output: {
    filename: "js/[name].js?[hash]",
    chunkFilename: "js/[name].chunk.js?[hash]",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
const compiler = webpack(serverConfig);
const srv = new devServer(compiler, {
  hot: true,
  publicPath: "/",
  contentBase: resolve(__dirname, "./dist"),
  port: 56789,
  openPage: "index.html",
  open: true
});

srv.listen(56789, "localhost");
