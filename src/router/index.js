import Vue from 'vue';
// import VueMaterial from 'vue-material';
import Router from 'vue-router';
import Home from '@/components/Home';
import BlogViewer from '@/components/BlogViewer';
import Blogs from '@/components/Blogs';

// Vue.use(VueMaterial);
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs,
    },
    {
      path: '/blogs/{:blogId}',
      name: 'blog',
      component: BlogViewer,
      props: true,
    },

    { path: '*', redirect: '/' },
  ],
});
