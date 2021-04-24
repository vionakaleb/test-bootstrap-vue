import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },      
      {
        path: '/image-rotator',
        name: 'image-rotator',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/tabbed-content',
        name: 'tabbed-content',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/text-search',
        name: 'text-search',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/pop-up',
        name: 'pop-up',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },
      {
        path: '/table',
        name: 'table',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      },   
    ]
  },
  {
    path: '/mockup',
    name: 'mockup',
    component: () => import(/* webpackChunkName: "demo" */ '../views/MockUp.vue')
  },  
];

export default routes;
