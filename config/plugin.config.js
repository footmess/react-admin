import path from 'path';
import MergeLessPlugin from 'antd-pro-merge-less';
import AntDesignThemePlugin from 'antd-pro-theme-webpack-plugin';

export default (config) => {
  // 合并less
  const outFile = path.join(__dirname, '../.temp/ant-design-pro.less');
  const stylesDir = path.join(__dirname, '../src/');

  config.plugin('merge-less').use(MergeLessPlugin, [
    {
      stylesDir,
      outFile,
    },
  ]);

  config.plugin('ant-design-theme').use(AntDesignThemePlugin, [
    {
      antDir: path.join(__dirname, '../node_modules/antd'),
      stylesDir,
      varFile: path.join(__dirname, '../node_modules/antd/lib/style/themes/default.less'),
      mainLessFile: outFile,
      indexFileName: 'index.html',
    },
  ]);
};
