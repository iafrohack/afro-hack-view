<template>
  <p> This is a Blog View. postId: {{ blogPostId }} </p>

  

</template>
<script>
export default {
  name: 'BlogPostViewer',
  props: {
    blogPostId: {
      type: Number,
      required: true,
    },
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
