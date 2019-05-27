<template>
  <div class="blogs-list">
   <v-layout>
      <v-flex md12 md6>
        <v-card>
          <v-container v-bind="{ 'grid-list-md': true }" fluid>
            <v-layout row wrap>
              <v-flex
                v-for="blogPost in blogPosts"
                :key="blogPost.id"
                md6>
             <blog-post-previewer :blog-post="blogPost" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>

import BlogPostsService from '@/services/blogPostsService';
import BlogPostPreviewer from '@/components/BlogPostPreviewer';

export default {
  name: 'BlogPosts',
  components: {
    BlogPostPreviewer,
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
