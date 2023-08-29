const path = require("path");

module.exports = {
  mode: "development", //   mode: "production"
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: "[name][ext]",
  },
};
