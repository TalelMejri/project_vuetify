<template>
    <nav>
        <v-app-bar app>
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
     
        <v-navigation-drawer app class="primary"  v-model="drawer">
            <v-list> 
                <v-list-item v-for="link in Links" :key="link.text" route :to="link.route">
                    <v-list-item-action>
                       <v-icon>mdi-{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{link.text}}</v-list-item-title>
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
            drawer:false,
            Links:[
                {text:'dashbord',icon:'view-dashboard',route:'/'},
                {text:'about',icon:'account',route:'/about'},
                {text:'home',icon:'email',route:'/home'}
            ]
        }
    }
}
</script>