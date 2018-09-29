module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.less$/,
        loader: 'less-loader' // compiles Less to CSS
      }]
    }
  }
};
