const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack");
const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        query: {
          configFileName: path.resolve(__dirname, "../tsconfig.json"),
        },
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader"),
      },
    ],
  });
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  });
  config.resolve.extensions = [".ts", ".tsx", ".js", ".jsx"];
  config.resolve.plugins = [new TsConfigPathsPlugin({})];
  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === "development",
    })
  );

  return config;
};
