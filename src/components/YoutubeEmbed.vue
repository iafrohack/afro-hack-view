<template>
  <div
    v-if="canShowProfile"
    class="feed__container--box">
    <header class="feed__container">
      <span class="feed__title">Youtube uploads </span>
      <span class="feed__author">by <a
        :href="youtubeProfileUrl"
        class="feed__link"
        target="_blank">{{ stakeholderFullName }}</a></span>
    </header>
    <iframe
      :width="embedWidth"
      :height="embedHeight"
      :src="embedUrl"
      class="feed__iframe"
      frameborder="0"/>
  </div>
</template>

<script type="text/ecmascript-6">

import SocialHelper from '@/services/social';
import * as SOCIAL_CONFIG from '@/constants/socialEmbed';
import { isEmpty as _isEmpty } from 'lodash';

export default {
  name: 'YoutubeEmbed',
  props: {
    youtubeProfileName: {
      type: String,
      default: () => '',
    },
    embedWidth: {
      type: Number,
      default: () => SOCIAL_CONFIG.EMBED_WIDTH,
    },
    embedHeight: {
      type: Number,
      default: () => SOCIAL_CONFIG.EMBED_HEIGHT,
    },
    stakeholderFullName: {
      type: String,
      required: true,
    },
    youtubeProfileUrl: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    canShowProfile() {
      return (
        !_isEmpty(this.youtubeProfileName) || !_isEmpty(this.youtubeProfileUrl)
      );
    },
    embedUrl() {
      return SocialHelper.getYoutubeEmbedUrl(
        this.youtubeProfileName,
        this.youtubeProfileUrl,
      );
    },
  },
};
</script>
