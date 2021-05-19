const { withSentryConfig } = require("@sentry/nextjs");

const withNextJSOptions = {
  i18n: {
    locales: ["en", "fr"],
    localeDetection: true,
    defaultLocale: "en",
  },
  productionBrowserSourceMaps: true,
  future: {
    webpack5: true,
  },
};

const withSentryWebpackPluginOptions = {};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(withNextJSOptions, withSentryWebpackPluginOptions);
