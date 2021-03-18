<template>
  <div class="feed__container--box">
    <a
      :href="twitterProfileUrl"
      :data-width="embedWidth"
      :data-height="embedHeight"
      class="twitter-timeline"
      data-link-color="#2B7BB9"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import SocialHelper from '@/services/social';
import * as SOCIAL_CONFIG from '@/constants/socialEmbed';

export default {
  name: 'TwitterEmbed',
  props: {
    twitterProfileUrl: {
      type: String,
      default: () => 'https://twitter.com/iafrohack',
    },
    embedWidth: {
      type: Number,
      default: () => SOCIAL_CONFIG.EMBED_WIDTH,
    },
    embedHeight: {
      type: Number,
      default: () => SOCIAL_CONFIG.EMBED_HEIGHT,
    },
  },
  mounted() {
    this.loadTwitterEmbed();
  },
  methods: {
    loadTwitterEmbed() {
      SocialHelper.loadTwitterWidget();
    },
  },
};
</script>
