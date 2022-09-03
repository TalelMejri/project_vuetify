<template>
  <v-app>
   
     <Navbar></Navbar>
    <router-view></router-view> 
  </v-app>
    <!--<v-avatar color="success">
      <v-icon  color="white">
        mdi-github
      </v-icon>
    </v-avatar>
    <v-icon>mdi-email</v-icon>
    <navbar></navbar>
    <span  class="d-flex justify-center font-weight-bold display-4 ">hello</span>-->
   <!--<form-wizard >
      <tab-content title="premiere" :selected="true" >
          <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" class="form-control" :class="hasError('fullName') ? 'is-invalid' :''" placeholder="Enter your name" v-model="formData.fullName">
              <div v-if="hasError('fullName')" class="invalid-feedback">
                  <div class="error" v-if="!$v.formData.fullName.required">Please provide a valid name.</div>
              </div>
            </div>
      </tab-content>
      <tab-content title="About your Company"> 
          <div class="form-group">
              <label for="companyName">Your Company Name</label>
              <input type="text" class="form-control" :class="hasError('email') ?'is-invalid' :''" placeholder="Enter your Company / Organization name" v-model="formData.email">
            <div v-if="hasError('email')" class="invalid-feddback">
              <div class="error" v-if="!$v.formData.email.required">email filed is required</div>
              <div class="error" v-if="!$v.formData.email.email">should be in email format</div>
            </div>
            </div>
      </tab-content>
      <tab-content title="Finishing Up">
          <div class="form-group">
              <label for="referral">From Where did you hear about us</label>
              <select class="form-control" v-model="referral">
                  <option>Newspaper</option>
                  <option>Online Ad</option>
                  <option>Friend</option>
                  <option>Other</option> 
              </select>
          </div>
      </tab-content>
  </form-wizard>-->
  
 
 <!-- <div class="d-flex justify-center mb-5">
    
  </div> 

   <div class="mx-5 d-flex justify-center">
    <v-alert
      v-model="alert"
      dark
      border="left"
      color="cyan"
      icon="mdi-twitter"
      elavation="4"
      colored-border
      dismissible
      prominent
       >
        hello
    </v-alert>
    
   </div>
   <v-alert
   type="success"
    >
     hello
 </v-alert>
   <div class="text-center">

   <v-btn v-if="!alert"
   @click="alert=true"
   dark>
   Restart
    
  </v-btn>

</div>


    <div class="d-flex justify-center">
      <v-btn @click="start">Start</v-btn>
      <v-btn  @click="stop">Stop</v-btn >
      <v-btn  @click="love">Show some love</v-btn >
      
      <v-btn  fab class="hidden-md-only">hello</v-btn>
    </div>  -->
   
</template>

<script>
import { FormWizard, TabContent,ValidationHelper} from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import { required } from 'vuelidate/lib/validators';
import { email } from 'vuelidate/lib/validators';
import { numeric } from 'vuelidate/lib/validators';
import navbar from "@/components/Navbar.vue";
import Vue from 'vue';
import VueConfetti from 'vue-confetti';
import Navbar from "@/components/Navbar.vue";
Vue.use(VueConfetti);

export default {
  name: 'App',
  components:{
    navbar,
    FormWizard,
    TabContent,
    Navbar
},
    mixins: [ValidationHelper],
  data(){
    return{
      drawer:false,
            Links:[
                {text:'dashbord',icon:'view-dashboard',route:'/'},
                {text:'about',icon:'account',route:'/about'},
                {text:'home',icon:'email',route:'/home'}
            ],
      alert:true,
      e1:1,
      formData:{
        fullName: '',
        email: null,
        companyName: null,
        numberOfEmployees: null,
        referral: null,
        terms: false,
    },
    validationRules:[
        {fullName: {required}, email: {required, email} },  
        {companyName: {required}, numberOfEmployees: {required, numeric} },   
        {referral: {required}, terms: {required, numeric} }   
    ]
    }
  },
  methods: {
    submit(){
      
    },
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

<style scoped>
  
  .error {
    border: 1px solid red;
    border-radius: 5px;
    padding: 5px;
    color: white !important;
  }
</style>
