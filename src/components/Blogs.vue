<template>
  <div class="blogs-list">
    <img src="https://s3.amazonaws.com/iafrohack-frontend/images/afrohack-view-background-image.jpg"
    alt="blogs list background image"
    />
  </div>
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
