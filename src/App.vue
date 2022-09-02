<template>
  <v-app>
    <navbar></navbar>  
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
