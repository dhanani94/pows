const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder : {
      mainProcessFile: 'src/background/main.js',
      rendererProcessFile: 'src/renderer/main.js',
      preload: { preload: 'src/background/preload.js'}
    }
  }
});
