<template>

   <v-container
      v-if="hasBlogPost"
      fluid
      grid-list-sm
      tag="section"
    >
      <v-layout row wrap>
        <v-flex tag="h1" class="headline blogTitle">

        <div v-html="blogPost.title">
         </div>
         <div class="publish-time-stamp">
         Published on {{ postCreationDateTime }}
         </div>
        </v-flex>
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
import Time from '@/services/Time';

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
    postCreationDateTime() {
      const { createdAt } = this.blogPost;
      return Time.getDefaultTimeString(createdAt);
    },
    postLastUpdatedDateTime() {
      const { lastUpdatedAt } = this.blogPost;
      return Time.getDefaultTimeString(lastUpdatedAt);
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

.publish-time-stamp {
 text-align: left;
 font-size: 0.5em;
}
</style>
