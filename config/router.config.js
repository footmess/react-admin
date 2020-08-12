// 路由配置
export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './user/Login' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user', 'lyj'],
    routes: [
      { path: '/', redirect: '/user/login' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashbboard/workplace',
            name: 'workplace',
            component: './dashboard/Workplace',
          },
        ],
      },
      {
        path: '/otherUser',
        name: 'otherUser',
        icon: 'usergroup-add',
        routes: [
          {
            path: '/otherUser/list',
            name: 'list',
            component: './otherUser/List',
          },
        ],
      },
      {
        path: '/article',
        name: 'article',
        icon: 'file-markdoen',
        routes: [
          {
            path: '/article/list',
            name: 'list',
            component: './article/List',
          },
          {
            path: '/article/create',
            name: 'create',
            componet: './article/ArticleCreate',
          },
        ],
      },
      {
        path: '/message',
        name: 'message',
        icon: 'message',
        routes: [
          {
            path: '/message/list',
            name: 'list',
            component: './message/List',
          },
        ],
      },
      {
        path: '/tag',
        name: 'tag',
        icon: 'tags',
        routes: [
          {
            path: '/tag/list',
            name: 'list',
            component: './tag/List',
          },
        ],
      },
      {
        path: '/link',
        name: 'link',
        icon: 'link',
        routes: [
          {
            path: '/link/list',
            nameL: 'list',
            components: './link/List',
          },
        ],
      },
      {
        path: '/category',
        name: 'category',
        icon: 'book',
        routes: [
          {
            path: '/category/list',
            name: 'list',
            component: './category/List',
          },
        ],
      },
      {
        path: '/timeAxis',
        name: 'timeAxis',
        icon: 'clock-circle',
        routes: [
          {
            path: '/timeAxis/list',
            name: 'list',
            component: './timeAxis/List',
          },
        ],
      },
      {
        path: '/project',
        name: 'project',
        icon: 'clock-circle',
        routes: [
          {
            path: '/project/list',
            name: 'list',
            component: './project/List',
          },
        ],
      },
      {
        path: '/exception',
        name: 'exception',
        icon: 'warning',
        routes: [
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-found',
            component: './exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './exception/TriggerException',
          },
        ],
      },
      {
        path: '/account',
        name: 'account',
        icon: 'user',
        routes: [
          {
            path: '/account/settings',
            name: 'settings',
            component: './account/Setting/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './account/Settings/BaseView',
              },
              {
                path: '/account/setting/personalLink',
                component: './account/Settings/PersonalLinkView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
