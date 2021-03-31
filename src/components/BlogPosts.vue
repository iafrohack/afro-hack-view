<template>
  <div class="blogs-list row">
   <v-layout class="double-column">
      <v-flex md12 md6>
        <v-card>
          <v-container v-bind="{ 'grid-list-md': true }" fluid>
            <v-layout row wrap>
              <v-btn v-if="loading"
                color="primary"
                elevation="24"
                fab
                loading
                rounded
                x-large
                class="loading-icon">
              </v-btn>
              <v-flex
                v-for="blogPost in blogPosts"
                :key="blogPost.id"
                md6>
             <blog-post-previewer :blog-post="blogPost" class="double-column"/>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

      </v-flex>
    </v-layout>
    <social class="social-embed column" />
  </div>
</template>
<script>

import BlogPostsService from '@/services/blogPostsService';
import BlogPostPreviewer from '@/components/BlogPostPreviewer';
import Social from '@/components/Social';

export default {
  name: 'BlogPosts',
  components: {
    BlogPostPreviewer,
    Social,
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

.social-embed {
  float: right !important;
}

.loading-icon {
  margin-top:10%;
  margin-left:50%;
}
</style>
