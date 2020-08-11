// https://umijs.org/config/
import os from 'os';
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import pageRoutes from './router.config';
import webpackplugin from './plugin.config';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  ...(!process.env.TEST && os.platform() === 'darwin'
    ? {
        dll: {
          include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
          exclude: ['@babel/runtime'],
        },
        hardSource: true,
      }
    : {}),
  // 把node中的环境变量注入到define中，建立映射关系
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // umi routes: https://umijs.org/docs/routing
  routes: pageRoutes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  externals: {
    '@antv/data-set': 'DataSet',
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  // css loader 配置
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (ctx, localIdentName, localName) => {
      if (
        ctx.resourcePath.include('node_modules') ||
        ctx.resourcePath.include('ant.design.pro.less') ||
        ctx.resourcePath.include('global.less')
      ) {
        return localName;
      }
      const match = ctx.resourcePath.math(/src(.*)/);
      // match 返回一个数组第一项返回完全匹配的内容，后续项表示组合匹配的内容
      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = antdProPath
          .split('/')
          .map((i) => i.replace(/([A-Z])/g, '-$1'))
          .map((i) => i.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }
      return localName;
    },
  },
  // 测试环境代理才生效
  proxy: proxy[REACT_APP_ENV || 'dev'],
  // 离线配置
  manifest: {
    // basePath: '/',
    name: 'reac-blog',
    background_color: '#FFF',
    description: 'An out-of-box UI solution for enterprise applications as a React boilerplate.',
    display: 'standalone',
    start_url: '/index.html',
    icon: [
      {
        src: '/favicon.png',
        sizes: '48x48',
        type: 'image/png',
      },
    ],
  },
  // webpack配置
  chainWebpack: webpackplugin,
  // postcss插件 用来压缩css
  cssnano: {
    mergeRules: false,
  },
});
