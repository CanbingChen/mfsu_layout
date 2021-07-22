const routes = [
    {
        path: '/',
        component: '../layouts/index',
        routes: [
          {
            path: '/',
            redirect: '/data/dashboard',
          },
          {
            name: '数据统计1212',
            path: '/data/dashboard',
            component: './data/dashboard',
          },
          {
            name: '数据展示',
            path: '/data/test',
            component: './data/test',
          },
        ],
      },
]

export default routes