import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: '搜索列表（应用）',
      path: '/apps',
      component: './ListApplications',
    },
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/about',
      component: '@/pages/about',
    },
    {
      path: '/login',
      component: '@/pages/login',
    },
  ],
  fastRefresh: {},
  antd: {},
  dva: {},
});
