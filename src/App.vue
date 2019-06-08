<template>
<div id="app-main-container">
  <v-app light>
    <v-tabs
        dark
        fixed
        icons
        centered
        v-model="active"
        color="cyan"
        dark
        slider-color="yellow">

        <v-tab :to="{ name: 'home'}" ripple>
          <v-icon>home</v-icon>
         Home
        </v-tab>
        <v-tab :to="{ name: 'blogPosts'}" ripple>
          <v-icon>code</v-icon>
         Blog
        </v-tab>

      </v-tabs>
   <v-fade-transition mode="out-in">
       <router-view></router-view>
   </v-fade-transition>
  </v-app>
  <footer-container />
</div>

</template>
<script>
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: {
    'footer-container': Footer,
  },
  data() {
    return {
      active: 'home',
      navItems: [
        {
          title: 'Home',
          name: 'home',
          icon: 'home',
        },
        {
          title: 'Portfolio',
          name: 'portfolio',
          icon: 'code-tags-check',
        },
        {
          title: 'Blog',
          name: 'blogManager',
          icon: 'blogger',
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
