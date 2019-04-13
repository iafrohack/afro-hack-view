<template>
<div id="app-footer">
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018-2019 — <strong>iAfroHack</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</div>
</template>
<script>
export default {
  name: 'Footer',
};
</script>

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
