<template>
<div id="social-embed">
  <div class="email-container">

  <div class="email-container">
    <v-list class="transparent">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon class="blue--text text--lighten-2">email</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>
            <a href="mailto:iafrohack@gmail.com" class="email-link">
              Email me at iafrohack@gmail.com
            </a>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>

  </div>
  <twitter-embed />
</div>
</template>
<script>
import TwitterEmbed from '@/components/TwitterEmbed';

export default {
  name: 'Social',
  components: {
    TwitterEmbed,
  },
};
</script>

<style scoped>

#twitter-widget-0 {
  float: right !important;
}
.v-list__tile__action {
  min-width: 32px !important;
}

.email-link {
  text-decoration: none;
  margin-right: 20px !important;
}

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
