<template>

   <v-container
      v-if="hasBlogPost"
      fluid
      grid-list-sm
      tag="section"
    >
      <v-layout row wrap>
        <v-flex tag="h1" class="headline blogTitle"
        v-html="blogPost.title" />
        <v-flex d-flex xs12 order-xs5>
          <v-layout column>
            <v-flex>
              <v-card flat>
                <v-card-text
                style="text-align:left"
                 v-html="blogPost.content" />
              </v-card>
            </v-flex>
            <v-flex>
              <v-card flat>
                <v-card-text></v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>

import BlogPostsService from '@/services/blogPostsService';
import { isEmpty as _isEmpty } from 'lodash';

export default {
  name: 'BlogPostViewer',
  props: {
    blogPostId: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    BlogPostsService.getBlogPost(this, this.blogPostId);
  },
  data() {
    return {
      blogPost: {},
    };
  },
  computed: {
    hasBlogPost() {
      return !_isEmpty(this.blogPost);
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

.blogTitle {
  margin-bottom: 40px;
}
</style>
