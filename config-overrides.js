const { override, loaderByName } = require("craco");

module.exports = override((config, env) => {
  // Find the existing JavaScript rule
  const jsRule = loaderByName(config.module.rules, "babel-loader");

  // Modify the existing JavaScript rule (optional)
  if (jsRule) {
    jsRule.options.presets = ["@babel/preset-env", "@babel/preset-react"]; // Example modification
  }

  // Add your custom rules
  config.module.rules.push(
    {
      test: /\.m?js/,
      type: "javascript/auto",
    },
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    }
  );

  return config;
});
