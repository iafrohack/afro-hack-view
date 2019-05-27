<template>
  <div class="blogs-list">
    <div v-for="blogPost in blogPosts">
      <blog-post-viewer :blog-post-id="blogPost.id" />
    </div>
  </div>
</template>
<script>

import BlogPostsService from '@/services/blogPostsService';
import BlogPostViewer from '@/components/BlogPostViewer';

export default {
  name: 'BlogPosts',
  components: {
    BlogPostViewer,
  },
  mounted() {
    BlogPostsService.getAllBlogPosts(this);
  },
  data() {
    return {
      blogPosts: [],
      pagination: {
        currentPage: 1,
        resultsPerPage: 10,
      },
      loading: false,
      errorMessage: '',
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
