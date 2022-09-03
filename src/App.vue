<template>
  <v-app>

    <v-icon>mdi-email</v-icon>
    <navbar></navbar>
    <span  class="d-flex justify-center font-weight-bold display-4 ">hello</span>
     <form-wizard>
       <tab-content titel="premier">
          <div >
            <label for="">dd</label>
            <input type="text">
          </div>
          <div >
            <label for="">dd</label>
            <input type="text">
          </div>
          <div >
            <label for="">dd</label>
            <input type="text">
          </div>
       </tab-content>
       <tab-content titel="premier">
        <div >
          <label for="">dd</label>
          <input type="text">
        </div>
        <div >
          <label for="">dd</label>
          <input type="text">
        </div>
        <div >
          <label for="">dd</label>
          <input type="text">
        </div>
     </tab-content>
     <tab-content titel="premier">
      <div >
        <label for="">dd</label>
        <input type="text">
      </div>
      <div >
        <label for="">dd</label>
        <input type="text">
      </div>
      <div >
        <label for="">dd</label>
        <input type="text">
      </div>
   </tab-content>
     </form-wizard>
    <div>
      <v-btn @click="start">Start</v-btn>
      <v-btn  @click="stop">Stop</v-btn >
      <v-btn  @click="love">Show some love</v-btn >
      
      <v-btn  fab class="hidden-md-only">hello</v-btn>
    </div>  
    <router-view></router-view> 
  </v-app>
</template>

<script>
import { FormWizard, TabContent, ValidationHelper } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import navbar from "@/components/Navbar.vue";
import Vue from 'vue'
import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)
export default {
  name: 'App',
  components:{
    navbar, FormWizard, TabContent
  },

  data: () => ({
    //
  }),
  methods: {
      start() {
        this.$confetti.start();
      },

      stop() {
        this.$confetti.stop();
      },

      love() {
        this.$confetti.update({
          particles: [
            {
              type: 'heart',
            },
            {
              type: 'circle',
            },
          ],
          defaultColors: [
            'red',
            'pink',
            '#ba0000'
          ],
        });
      }
    }
};
</script>
