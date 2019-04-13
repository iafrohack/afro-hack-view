<template>
  <div>
    <v-tabs dark fixed icons centered>
     <v-tabs-bar class="cyan">
        <v-tabs-slider color="yellow"></v-tabs-slider>
       <v-tabs-item :to="{name: 'blogManager'}" v-bind:router="true" >
         <v-icon>blogger</v-icon>
         <v-btn color="primary" dark>Create New
        <v-icon dark right>plus</v-icon>
      </v-btn>
       </v-tabs-item>
     </v-tabs-bar>
    </v-tabs>
    <v-fade-transition mode="out-in">
       <router-view></router-view>
    </v-fade-transition>
    <p> This is the Blog Manager view</p>
  </div>
</template>
<script>
export default {
  name: 'BlogManager',
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
