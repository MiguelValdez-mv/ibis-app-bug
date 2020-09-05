module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // dependencies
            "lottie-react-native": "react-native-web-lottie",

            // app config
            "@/theme": "./src/theme",
            "@/assets": "./src/assets",
            "@/constants": "./src/constants",

            // building blocks
            "@/components": "./src/components",
            "@/contexts": "./src/contexts",
            "@/hooks": "./src/hooks",
            "@/hocs": "./src/hocs",
            "@/screens": "./src/screens",
            "@/utils": "./src/utils",
            "@/router": "./src/router",
            "@/copy": "./src/copy",
            "@/intl": "./src/intl",
            "@/containers": "./src/containers",
            "@/actions": "./src/actions",
            "@/reducers": "./src/reducers",
            "@/services": "./src/services",

            // Third party services & dependencies
            "@/google-analytics": "./src/third-party/google-analytics",
            "@/mixpanel": "./src/third-party/mixpanel",
            "@/mousetrap": "./src/third-party/mousetrap",
            "@/sentry": "./src/third-party/sentry",
            "@/storybook": "./src/third-party/storybook",
          },
        },
      ],
    ],
  };
};
