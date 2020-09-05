const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ["../src/**/*.story.(js|mdx)"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    {
      name: "@storybook/addon-docs/preset",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async (config) => {
    // reset module rules
    // config.module.rules.length = 0;

    // config.plugins.push(
    //   new webpack.DefinePlugin({
    //     __DEV__: false,
    //   })
    // );

    config.resolve.extensions = [".web.js", ".js", ".json", ".web.jsx", ".jsx"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "react-native": "react-native-web",
      "@/**/*": path.resolve(__dirname, "../src"),
    };

    return config;
  },
};
