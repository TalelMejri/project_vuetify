<template>
  <v-app>

    <v-icon>mdi-email</v-icon>
    <navbar></navbar>
    <span  class="d-flex justify-center font-weight-bold display-4 ">hello</span>
    
    <div>
      
      <v-btn  fab class="hidden-md-only">hello</v-btn>
    </div>  
    <router-view></router-view> 
  </v-app>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
  name: 'App',
  components:{
    navbar
  },

  data: () => ({
    //
  }),
};
</script>
