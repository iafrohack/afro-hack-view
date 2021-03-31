<template>
     <main>
       <v-content class="main-content">

         <div class="row">
           <section class="double-column">
             <v-parallax src="//s3.amazonaws.com/iafrohack.com/images/hero.jpeg" height="600">
               <v-layout
                 align-center
                 justify-center
                 class="white--text double-column"
               >

                 <h1 class="white--text mb-2 display-1 text-xs-center">iafrohack</h1>
                 <div class="subheading mb-3 text-xs-center">Learn, have fun, enjoy!</div>
                 <v-btn
                   class="blue lighten-2 mt-5"
                   dark
                   large>

                 <v-tab :to="{name: 'blogPosts'}" ripple>
                     <v-icon>code</v-icon>
                       Check out the blogs...
                  </v-tab>
                 </v-btn>
               </v-layout>
             </v-parallax>
           </section>

           <social class="social-embed column" />

       </div>

         <section class="row">
           <v-layout
             wrap
             class="my-5 double-column"
             align-center
           >
             <v-flex xs12 sm4 class="my-3">
               <div class="text-xs-center">
                 <h2 class="headline">Come learn with us</h2>
                 <span class="subheading">
                   Read about software engineering technical tips, life lessons, and just about anything you
                   could imagine...
                 </span>
               </div>
             </v-flex>
             <v-flex xs12>
               <v-container grid-list-xl>
                 <v-layout row wrap align-center>
                   <v-flex xs12 md4>
                     <v-card class="elevation-0 transparent">
                       <v-card-text class="text-xs-center">
                         <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                       </v-card-text>
                       <v-card-title primary-title class="layout justify-center">
                         <div class="headline text-xs-center">Technical Tips</div>
                       </v-card-title>
                       <v-card-text>
                         Blogs on far-ranging topics, in different languages,
                         experiments with latest technologies and so much more
                       </v-card-text>
                     </v-card>
                   </v-flex>
                   <v-flex xs12 md4>
                     <v-card class="elevation-0 transparent">
                       <v-card-text class="text-xs-center">
                         <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                       </v-card-text>
                       <v-card-title primary-title class="layout justify-center">
                         <div class="headline">Life Lessons</div>
                       </v-card-title>
                       <v-card-text>
                         You might pick up a thing or 2 from the various
                         discussions in this space...
                       </v-card-text>
                     </v-card>
                   </v-flex>
                   <v-flex xs12 md4>
                     <v-card class="elevation-0 transparent">
                       <v-card-text class="text-xs-center">
                         <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                       </v-card-text>
                       <v-card-title primary-title class="layout justify-center">
                         <div class="headline text-xs-center">Share Knowledge</div>
                       </v-card-title>
                       <v-card-text>
                         Bug fixes? Some little-known tips? Things that just might change
                         your thinking? Come and enjoy the ride...
                       </v-card-text>
                     </v-card>
                   </v-flex>
                 </v-layout>
               </v-container>
             </v-flex>
           </v-layout>
         </section>

         <section>
           <v-parallax src="//s3.amazonaws.com/iafrohack.com/images/section.jpeg" height="380">
             <v-layout class="double-column" align-center justify-center>
               <div class="headline white--text mb-3 text-xs-center">
               Never doubt your own abilities...

               </div>
               <em>
               You are your worst enemy...
               </em>
               <v-btn
                 class="blue lighten-2 mt-5"
                 dark
                 large>
                 <v-tab :to="{name: 'blogPosts'}" ripple>
                   <v-icon>code</v-icon>
                     Learn more...
                </v-tab>
               </v-btn>
             </v-layout>
           </v-parallax>
         </section>

         <section>
           <v-container grid-list-xl>
             <v-layout row wrap justify-center class="my-5">
               <v-flex xs12 sm4>
                 <v-card class="elevation-0 transparent">
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline">Life is an adventure...</div>
                   </v-card-title>
                   <v-card-text>

                     Live today as if it is your last day...it might just as well be it...
                     never stop believing...
                     <br/><br/>
                     Never take for granted people closest to you...they are the ones that
                     count when things are going South in your life...


                     <br/><br/>
                     Opportunity only comes once...seize yours with both hands...

                   </v-card-text>
                 </v-card>
               </v-flex>
               <v-flex xs12 sm4 offset-sm1>
                 <v-card class="elevation-0 transparent">
                   <v-card-title primary-title class="layout justify-center">
                     <div class="headline">Hit me up...</div>
                   </v-card-title>
                   <v-card-text>
                     Leave me a note, an idea, feedback, I am all-ears...
                   </v-card-text>
                   <v-list class="transparent">
                     <v-list-tile>
                       <v-list-tile-action>
                         <v-icon class="blue--text text--lighten-2">phone</v-icon>
                       </v-list-tile-action>

                       <v-list-tile-content>
                         <v-list-tile-title>coming up...</v-list-tile-title>
                       </v-list-tile-content>
                     </v-list-tile>
                     <v-list-tile>
                       <v-list-tile-action>
                         <v-icon class="blue--text text--lighten-2">place</v-icon>
                       </v-list-tile-action>
                       <v-list-tile-content>
                         <v-list-tile-title>Washington D.C., US</v-list-tile-title>
                       </v-list-tile-content>
                     </v-list-tile>
                     <v-list-tile>
                       <v-list-tile-action>
                         <v-icon class="blue--text text--lighten-2">email</v-icon>
                       </v-list-tile-action>
                       <v-list-tile-content>
                         <v-list-tile-title>iafrohack@gmail.com</v-list-tile-title>
                       </v-list-tile-content>
                     </v-list-tile>
                   </v-list>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-container>
         </section>
       </v-content>

     </main>
   </v-app>
</template>
<script>
import Social from '@/components/Social';

export default {
  name: 'Home',
  components: {
    Social,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.social-embed {
  float: right !important;
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
