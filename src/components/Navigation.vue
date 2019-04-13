<template>
  <v-tabs dark fixed icons centered>
   <v-tabs-bar class="cyan">
      <v-tabs-slider color="yellow"></v-tabs-slider>
     <v-tabs-item  :to="{name: 'home'}" v-bind:router="true" >
       <v-icon>home</v-icon>
       Home
     </v-tabs-item>
     <v-tabs-item :to="{name: 'portfolio'}" v-bind:router="true" >
       <v-icon>atom</v-icon>
       PortFolio
     </v-tabs-item>
     <v-tabs-item :to="{name: 'blogManager'}" v-bind:router="true" >
       <v-icon>blogger</v-icon>
       Blog
     </v-tabs-item>
   </v-tabs-bar>
 </v-tabs>
 <v-fade-transition mode="out-in">
     <router-view></router-view>
 </v-fade-transition>
</template>

<script>
export default {
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
      title: 'AfroHack Home Page',
    };
  },
  name: 'Navigation',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
