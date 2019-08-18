<template>
   <div>
     <div class="grey lighten-3">
      <v-layout row>
        <v-flex md12 md6>
          <v-card>
            <v-img
            :src="postBackgroundImage"
            height="200px"
            @click.prevent="navigateToBlogPost">
            </v-img>
          <v-card-title primary-title>
            <div>
                <div class="title-style">
                {{ postTitle }}
                </div>
                <v-spacer />
              <span class="grey--text" v-html="postSummary">
              </span>
            </div>
          </v-card-title>

          <v-card-actions>
          <v-btn flat @click.prevent="navigateToBlogPost"
            ripple>
            <v-icon class="read-more-icon">code</v-icon>
            Read more...
            </v-btn>
            <v-spacer />
            <v-btn flat color="purple"
            class="published-at-button">
            {{ postPublishedAtDateTime }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    </div>
   </div>
</template>
<script>

import Time from '@/services/Time';

export default {
  name: 'BlogPostPreviewer',
  props: {
    blogPost: {
      type: Object,
      required: true,
    },
  },
  computed: {
    postSummary() {
      return this.blogPost.summary || '';
    },
    postTitle() {
      return this.blogPost.title;
    },
    postBackgroundImage() {
      return this.blogPost.backgroundImage || '';
    },
    postPublishedAtDateTime() {
      const { publishedAt } = this.blogPost;
      return Time.getDefaultTimeString(publishedAt);
    },
  },
  methods: {
    navigateToBlogPost() {
      this.$router.push({ name: 'blogPost', params: { blogPostId: this.blogPost.id } });
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

.title-style {
   font-size: 18px;
}

.published-at-button {
  margin-right: 15% !important;
}

.read-more-icon {
   margin-right: 5px;
}
</style>
