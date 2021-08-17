module.exports = {
  css: {
    extract: true,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/style/variables.scss";`
      },
    }
  },
  outputDir: "dist-" + process.env.NODE_ENV,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/mall': {
        target: process.env.VUE_APP_API,
        changeOrigin: true,
        pathRewrite: {
          // '^/api': ''
        }
      },
      '/static': {
        target: process.env.VUE_APP_API,
        changeOrigin: true,
        pathRewrite: {
          // '^/api': ''
        }
      },
    }
  }
};
