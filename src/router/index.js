import Vue from 'vue';
// import VueMaterial from 'vue-material';
import Router from 'vue-router';
import Home from '@/components/Home';
import BlogPostViewer from '@/components/BlogPostViewer';
import BlogPosts from '@/components/BlogPosts';
import BlogEditor from '@/components/BlogEditor';
import * as END_POINTS from '@/constants/endPoints';

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
      path: '/blogPosts',
      name: 'blogPosts',
      component: BlogPosts,
    },
    {
      path: '/blogPosts/{:blogPostId}',
      name: 'blogPost',
      component: BlogPostViewer,
      props: route => ({ blogPostId: route.params.blogPostId }),
    },
    {
      path: '/blogEditor',
      name: 'blogEditor',
      component: BlogEditor,
    },

    {
      path: '/github',
      name: 'github',
      beforeEnter() { location.href = END_POINTS.IAFROHACK_GITHUB_HOME; },
    },


    { path: '*', redirect: '/' },
  ],
});
