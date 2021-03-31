<template>

   <v-container
      v-if="hasBlogPost"
      fluid
      grid-list-sm
      tag="section"
      class="row"
    >

      <v-layout wrap class="double-column">
        <v-flex tag="h1" class="headline blogTitle">

        <div v-html="blogPost.title">
         </div>
         <div class="publish-time-stamp">
         Published on {{ postPublishedAtDateTime }}
         </div>
        </v-flex>
        <v-flex d-flex xs12 order-xs5>
          <v-layout class="double-column">
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

      <social class="social-embed column" />
    </v-container>
</template>
<script>

import BlogPostsService from '@/services/blogPostsService';
import { isEmpty as _isEmpty } from 'lodash';
import Time from '@/services/Time';
import Social from '@/components/Social';

export default {
  name: 'BlogPostViewer',
  props: {
    blogPostId: {
      type: String,
      required: true,
    },
  },
  components: {
    Social,
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
    postPublishedAtDateTime() {
      const { publishedAt } = this.blogPost;
      return Time.getDefaultTimeString(publishedAt);
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

.social-embed {
  float: right !important;
}

</style>
