import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartsInfo from '../parts/PartsInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
      {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartsInfo,
    props: true,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  }],
});
