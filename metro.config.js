// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  transformer: {
    ...config.transformer,
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    ...config.resolver,
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'cjs', 'sql'], // Keep .sql for mobile
    assetExts: ['png', 'jpg', 'jpeg', 'ttf', 'woff', 'woff2', 'otf', 'svg', 'gguf'], // Keep .gguf for mobile
  },
};
