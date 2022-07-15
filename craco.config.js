const CracoAntDesignPlugin = require('craco-antd');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
module.exports = {
  // webpack: {
  //   plugins: [new BundleAnalyzerPlugin()],
  // },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': 'green',
          "@blue-base": "#4361ee",
          "@purple-base": "#805dca",
          "@cyan-base": "#2196f3",
          "@green-base": "#1abc9c",
          "@magenta-base": "#f8538d",
          "@pink-base": "#f8538d",
          "@red-base": "#e7515a",
          "@orange-base": "#e2a03f",
          "@yellow-base": "#ffbb44",
          "@volcano-base": "#e95f2b",
          "@geekblue-base": "#4361ee",
          "@info-color": "#2196f3",
          "@success-color": "#1abc9c",
          "@processing-color": "#4361ee",
          "@error-color": "#e7515a",
          "@highlight-color": "#e7515a",
          "@warning-color": "#e2a03f",
          "@body-background": "#f1f2f3",
          "@border-radius-base": "0px",
        },
      },
    },
  ],
};
