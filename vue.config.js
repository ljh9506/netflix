module.exports = {
  outputDir: './docs',
  publicPath: '/netflix/',
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
  },
};
