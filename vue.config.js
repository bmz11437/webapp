const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',

  chainWebpack: config => {
    // 别名
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
