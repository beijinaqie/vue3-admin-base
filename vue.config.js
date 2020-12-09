// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path'); // 引入join模块

function resolve(dir) {
  return join(__dirname, dir); //设置绝对路径
}

module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'));
  }
};
