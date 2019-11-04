const path = require('path');
const ThreeExamples = require('import-three-examples')

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  chainWebpack: config => {
    // 别名
    config.resolve.alias.set('@', resolve('src'));
    ThreeExamples.forEach((v) => {
      if (~v.use.indexOf('imports')) {
        config.module
          .rule(`${v.test}_i`)
          .test(require.resolve(v.test))
          .use(v.use)
          .loader(v.use)
      } else {
        config.module
          .rule(`${v.test}_e`)
          .test(require.resolve(v.test))
          .use(v.use)
          .loader(v.use)
      }
    })
  }

}
