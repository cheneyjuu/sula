export default [
  {
    name: 'basicData',
    path: "/basicData",
    icon: 'control',
    component: '../layout',
    routes: [
      {
        name: 'modifyPwd',
        path: '/basicData/modifyPwd',
        component: './basic/modifyPwd'
      },
      {
        name: 'loginIndexPage',
        path: '/basicData/loginIndexPage',
        component: './basic/loginIndexPage'
      },
      {
        name: 'addSubSchool',
        path: '/basicData/addSubSchool',
        component: './basic/addSubSchool'
      },
      {
        name: 'classroomList',
        path: '/basicData/classroomList',
        component: './basic/classroom'
      }
    ]
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './login',
      },
    ],
  },
  {
    path: '/',
    redirect: '/basicData',
  },
  {
    path: '/basicData',
    redirect: '/basicData/modifyPwd',
  },
  {
    name: 'charts',
    icon: 'areaChart',
    component: '../layout',
    path: '/charts',
    routes: [
      {
        path: '/charts',
        redirect: '/charts/basic',
      },
      {
        path: '/charts/basic',
        name: 'basic',
        component: './charts',
        target: '_blank',
    menuRender: false,
    menuHeaderRender: false,
    headerRender: false,
      },
      {
        component: './exception/404',
      },
    ],
  },
  {
    name: 'campaign',
    path: '/campaign',
    icon: 'control',
    component: '../layout',
    routes: [
      {
        name: 'list',
        path: '/campaign/list',
        component: './campaign'
      },
      {
        // name: 'create',
        path: '/campaign/create',
        component: './campaign/create'
      }
    ]
  },
  {
    name: 'event',
    icon: 'control',
    path: '/event',
    component: '../layout',
    routes: [
      {
        path: '/event',
        redirect: '/event/manage',
      },
      {
        path: '/event/manage',
        name: 'manage',
        component: './event/manage',
      },
      {
        path: '/event/view/:id',
        component: './event/detail',
        name: 'detail',
        hideInMenu: true,
      },
      {
        component: './exception/404',
      },
    ],
  },
  {
    name: 'flow',
    icon: 'project',
    path: '/flow',
    component: '../layout',
    access: 'canAdmin',
    routes: [
      {
        path: '/flow',
        redirect: '/flow/manage',
      },
      {
        path: '/flow/manage',
        name: 'manage',
        component: './flow/manage',
      },
      {
        path: '/flow/create',
        component: './flow/detail',
        name: 'create',
        hideInMenu: true,
      },
      {
        path: '/flow/:mode/:id',
        component: './flow/detail',
        name: 'detail',
        hideInMenu: true,
      },
      {
        component: './exception/404',
      },
    ],
  },
  {
    name: 'activity',
    icon: 'alert',
    access: 'canAdmin',
    component: '../layout',
    path: '/activity',
    routes: [
      {
        path: '/activity',
        redirect: '/activity/manage',
      },
      {
        path: '/activity/manage',
        name: 'manage',
        component: './activity/manage',
      },
      {
        path: '/activity/create',
        component: './activity/edit',
        name: 'create',
        hideInMenu: true,
      },
      {
        path: '/activity/edit/:id',
        component: './activity/edit',
        name: 'edit',
        hideInMenu: true,
      },
      {
        path: '/activity/view/:id',
        component: './activity/detail',
        name: 'detail',
        hideInMenu: true,
      },
      {
        component: './exception/404',
      },
    ],
  },
  {
    name: 'release',
    icon: 'cloudUpload',
    component: '../layout',
    path: '/release',
    routes: [
      {
        path: '/release',
        redirect: '/release/manage',
      },
      {
        path: '/release/manage',
        name: 'manage',
        component: './release/manage',
      },
    ],
  },
  {
    name: 'graphviz',
    icon: 'BranchesOutlined',
    component: '../layout',
    path: '/graphviz',
    routes: [
      {
        path: '/graphviz',
        redirect: '/graphviz/relation',
      },
      {
        path: '/graphviz/relation',
        name: 'relation',
        component: './graphviz/relation',
      },
    ],
  },
  {
    component: './exception/404',
  },
];
