<template>
    <nav>
        <v-app-bar app flat class="warning">
            <v-toolbar-side-icon>
              <v-btn @click="drawer=!drawer">
                  <v-icon >mdi-view-list</v-icon>
              </v-btn>
            </v-toolbar-side-icon>
            <v-toolbar-titel class="text-uppercase mx-2">
                <span class="font-weight-bold">Todo</span><SPAN>talel</SPAN>
            </v-toolbar-titel>
            <v-spacer></v-spacer>
            <v-btn>
                 <span>Sign Out</span>
                <v-icon class="px-1">mdi-exit-to-app</v-icon>
            </v-btn>
         </v-app-bar>
     
        <v-navigation-drawer app class="warning"  v-model="drawer">
           <v-layout class="mt-5 mb-4" column align-center>
                <v-avatar elevation="4" size="100">
                    <img src="../assets/talel.jpg" alt="">
                </v-avatar>
               <div>
                  <span class="dark--text subheading mt-1 text-center">Talel Mejri</span>
               </div>
           </v-layout>
            <v-list> 
                <v-list-item v-for="link in Links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                       <v-icon>mdi-{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title class="white--text font-weight-bold">{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>  
            </v-list>   
        </v-navigation-drawer>
    </nav>
   
</template>

<script>
export default {
    name:'navbar',
    methods:{
    },
    data(){
        return{
            drawer:true,
            Links:[
                {text:'dashboard',icon:'view-dashboard',route: '/' },
                {text:'projet',icon:'account',route: '/projet' },
                {text:'team',icon:'email',route: '/team' } 
            ]
        }
    }
}
</script>