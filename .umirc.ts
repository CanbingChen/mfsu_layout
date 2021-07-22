import { defineConfig } from 'umi';
import routes from './config/route'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu:{},
  routes: routes,
  fastRefresh: {},
});
