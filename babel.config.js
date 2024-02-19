// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//     plugins: [
//       "@babel/plugin-proposal-export-namespace-from",
//       "react-native-reanimated/plugin",
//       "nativewind/babel",
//       require.resolve("expo-router/babel"),
//       ["module:react-native-dotenv", {
//         "moduleName": "@env",
//         "path": ".env",
//         "blacklist": null,
//         "whitelist": null,
//         "safe": false,
//         "allowUndefined": true
//       }]
//     ],
//   };
// };

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
   plugins: ["nativewind/babel",'expo-router/babel'],
  };
};
