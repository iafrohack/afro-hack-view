import Vue from 'vue';
// import VueMaterial from 'vue-material';
import Router from 'vue-router';
import Home from '@/components/Home';
import BlogPostViewer from '@/components/BlogPostViewer';
import BlogPosts from '@/components/BlogPosts';

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
      props: true,
    },

    { path: '*', redirect: '/' },
  ],
});
