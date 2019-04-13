<template>
  <p> This is a preview of all of the blogs</p>
</template>
<script>
export default {
  name: 'Blogs',

  data() {
    return {
      blogsList: [

      ],
    };
  },
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
